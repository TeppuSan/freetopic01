'use client';

import dynamic from "next/dynamic";
// import Link from "next/link";



// 動的インポートで SSR 回避（推奨）
const MonacoEditor = dynamic(() => import("./components/MonacoEditor"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="wrap">
      {/* ここから下各コンポーネント */}
        <MonacoEditor/>
    </div>
  );
}
