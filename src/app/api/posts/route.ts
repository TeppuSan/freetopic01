// app/api/receive/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { posLang, posCode } = body;

    // ファイルの拡張子を言語に応じて設定
    const extensionMap: { [key: string]: string } = {
      'c': 'c',
      'javascript': 'js',
      'python': 'py',
      // 必要に応じて他の言語を追加
    };

    const extension = extensionMap[posLang.toLowerCase()] || 'txt';
    const fileName = `code.${extension}`;
    
    // Docker コンテナを起動
    const { stdout, stderr } = await execAsync('docker run hello-world');

    const headers = new Headers();
    headers.append('Content-Type', 'text/plain; charset=utf-8');
    headers.append('Content-Disposition', `attachment; filename="${fileName}"`);

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

