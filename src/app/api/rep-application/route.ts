import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Create a new page in the Notion database
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.REP_DATABASE_ID!,
      },
      properties: {
        'Name': {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        'Email': {
          email: email,
        },
        'Applied At': {
          date: {
            start: new Date().toISOString(),
          },
        },
        'Status': {
          select: {
            name: 'New',
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Beta application received successfully!',
      id: response.id,
    });
  } catch (error) {
    console.error('Error submitting to Notion:', error);
    return NextResponse.json(
      { error: 'Failed to submit beta application' },
      { status: 500 }
    );
  }
} 