import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";
import { PLATFORM_LABELS, waitlistSchema } from "@/lib/waitlist";

function getNotionClient() {
  const secret = process.env.NOTION_SECRET;
  const databaseId = process.env.NOTION_DB;

  if (!secret || !databaseId) {
    throw new Error("Missing NOTION_SECRET or NOTION_DB");
  }

  return {
    notion: new Client({ auth: secret }),
    databaseId,
  };
}

async function emailAlreadyExists(notion: Client, databaseId: string, email: string) {
  const existing = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Email",
      email: {
        equals: email,
      },
    },
    page_size: 1,
  });

  return existing.results.length > 0;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = waitlistSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: parsed.error.issues[0]?.message ?? "Invalid form data",
        },
        { status: 400 },
      );
    }

    const { name, email, phone, platform } = parsed.data;
    const { notion, databaseId } = getNotionClient();

    if (await emailAlreadyExists(notion, databaseId, email)) {
      return NextResponse.json(
        {
          success: false,
          error: "This email is already on the waitlist.",
          code: "ALREADY_EXISTS",
        },
        { status: 409 },
      );
    }

    const now = new Date().toISOString();

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              type: "text",
              text: { content: name },
            },
          ],
        },
        Email: {
          email,
        },
        Phone: {
          phone_number: phone,
        },
        Platform: {
          rich_text: [
            {
              type: "text",
              text: { content: PLATFORM_LABELS[platform] },
            },
          ],
        },
        DateAndTime: {
          rich_text: [
            {
              type: "text",
              text: { content: now },
            },
          ],
        },
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Waitlist signup failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}
