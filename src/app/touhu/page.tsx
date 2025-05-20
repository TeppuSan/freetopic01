'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>TouhuHome</div>
      {/* ここから下各コンポーネント */}
      <Link href={'./'}>Home</Link><br />
    </div>
  );
}
