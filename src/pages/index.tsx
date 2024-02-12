import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Blog</title>
      </Head>
      <Layout>
        <div className="grid grid-cols-3 gap-2.5 gap-y-5">
          <article className="w-[300px] mx-auto">
            <Link href="/">
              <img className="mb-2  rounded-sm" src="https://picsum.photos/300/300"></img>
              <p>初めまして</p>
              <small>2024/01/01</small>
            </Link>
          </article>
          <article className="w-[300px] mx-auto">
            <Link href="/">
              <img className="mb-2  rounded-sm" src="https://picsum.photos/300/300"></img>
              <p>Next.jsを使ってBlogを開発しました</p>
              <small>2024/02/12</small>
            </Link>
          </article>
          <article className="w-[300px] mx-auto">
            <Link href="/">
              <img className="mb-2  rounded-sm" src="https://picsum.photos/300/300"></img>
              <p>転職しました。</p>
              <small>2024/02/19</small>
            </Link>
          </article>
          <article className="w-[300px] mx-auto">
            <Link href="/">
              <img className="mb-2  rounded-sm" src="https://picsum.photos/300/300"></img>
              <p>OpenAPIを使用してインタラクティブなAPI定義を作成する方法</p>
              <small>2024/02/19</small>
            </Link>
          </article>
          <article className="w-[300px] mx-auto">
            <Link href="/">
              <img className="mb-2  rounded-sm" src="https://picsum.photos/300/300"></img>
              <p>GithubActionsでフロント自動テスト環境を整備する手順</p>
              <small>2024/03/01</small>
            </Link>
          </article>
        </div>
      </Layout>
    </>
  );
}
