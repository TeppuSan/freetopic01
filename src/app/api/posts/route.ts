// src/app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { id: 1, title: 'はじめての投稿' },
    { id: 2, title: 'Next.jsの使い方' },
    { id: 3, title: 'APIルートの活用法' },
    { id: 4, title: 'はじめての投稿' },
    { id: 5, title: 'Next.jsの使い方' },
    { id: 6, title: 'APIルートの活用法' },
    { id: 7, title: 'はじめての投稿' },
    { id: 8, title: 'Next.jsの使い方' },
    { id: 9, title: 'APIルートの活用法' },
  ]);
}
