// app/api/receive/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { posLang, posCode } = body;

    return NextResponse.json({
      message: 'データを受け取りました',
      data: { posLang, posCode },
    });
  } catch (error) {
    return NextResponse.json(
      { message: '無効なJSON形式です' },
      { status: 400 }
    );
  }
}