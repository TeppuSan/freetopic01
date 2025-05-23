//src/app/page.tsx
'use client';

import dynamic from "next/dynamic";
import Link from "next/link";
// src/app/page.tsx
import { useEffect, useState } from 'react';

const MonacoEditor = dynamic(() => import("./components/MonacoEditor"), {
  ssr: false,
});

export default function Home() {
  interface Post {
    id: number;
    title: string;
  }


  return (
    <div>
      <div>TouhuHome</div>
      <Link href={'/touhu'}>Touhu</Link><br />
      <MonacoEditor />
    </div>
  );
}