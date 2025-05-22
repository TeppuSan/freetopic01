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

  const [posts, setPosts] = useState<Post[]>([]);
useEffect(() => {
  const fetchPosts = async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    console.log(data); // データの確認
    setPosts(data);
  };
  fetchPosts();
}, []);

  return (
    <div>
      <h1>投稿一覧</h1><ul>
  {posts.length > 0 ? (
    posts.map((post) => (
      <li key={post.id}>📝 {post.title}</li>
    ))
  ) : (
    <li>投稿がありません</li>
  )}
</ul>
      <div>TouhuHome</div>
      <Link href={'/touhu'}>Touhu</Link><br />
      <MonacoEditor />
    </div>
  );
}