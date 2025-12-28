import { NextResponse } from 'next/server';
import type { ApiResponse } from '@/types/common';

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
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Internal server error',
        success: false,
      },
      { status: 500 },
    );
  }
}
