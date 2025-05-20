'use client';

import dynamic from "next/dynamic";
import Link from "next/link";
dynamic



// 動的インポートで SSR 回避（推奨）
const MonacoEditor = dynamic(() => import("./components/MonacoEditor"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <div>TouhuHome</div>
      {/* ここから下各コンポーネント */}
      <Link href={'/touhu'}>Touhu</Link><br />
        <MonacoEditor/>
    </div>
  );
}
