import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createProcessorToken } from '@/actions/plaid';

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: NextRequest) {
  const { accessToken, accountId } = await request.json();

  try {
    const response = await createProcessorToken(accessToken, accountId);

    return NextResponse.json({
      status: 'OK',
      data: {
        processorToken: response.data.processor_token
      }
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 'Error',
      message: error.message
    });
  }
};