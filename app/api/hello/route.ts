import type { ApiResponse } from '@/types/common';
import { NextResponse } from 'next/server';

interface HelloResponse {
  message: string;
  timestamp: string;
}

export async function GET(): Promise<NextResponse<ApiResponse<HelloResponse>>> {
  try {
    const data: HelloResponse = {
      message: 'Hello from Strategy API!',
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json({
      data,
      success: true,
    });
  } catch (_error) {
    return NextResponse.json(
      {
        error: 'Internal server error',
        success: false,
      },
      { status: 500 },
    );
  }
}
