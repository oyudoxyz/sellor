import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(request: NextRequest) {
  try {
    console.log('Environment check:', {
      hasToken: !!process.env.NOTION_TOKEN,
      hasContactDb: !!process.env.CONTACT_DATABASE_ID,
      tokenLength: process.env.NOTION_TOKEN?.length || 0
    });

    const body = await request.json();
    const { companyName, workEmail, jobTitle } = body;

    console.log('Request body:', { companyName, workEmail, jobTitle });

    // Validate required fields
    if (!companyName || !workEmail) {
      return NextResponse.json(
        { error: 'Company name and work email are required' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.NOTION_TOKEN) {
      console.error('Missing NOTION_TOKEN environment variable');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_DATABASE_ID) {
      console.error('Missing CONTACT_DATABASE_ID environment variable');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    console.log('Creating Notion page with database ID:', process.env.CONTACT_DATABASE_ID);

    // Create a new page in the Notion database
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.CONTACT_DATABASE_ID!,
      },
      properties: {
        'Company Name': {
          title: [
            {
              text: {
                content: companyName,
              },
            },
          ],
        },
        'Work Email': {
          email: workEmail,
        },
        'Job Title': {
          rich_text: [
            {
              text: {
                content: jobTitle || '',
              },
            },
          ],
        },
        'Submitted At': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    console.log('Notion response:', response.id);

    return NextResponse.json({
      success: true,
      message: 'Contact submission received successfully!',
      id: response.id,
    });
  } catch (error) {
    console.error('Error submitting to Notion:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
} 