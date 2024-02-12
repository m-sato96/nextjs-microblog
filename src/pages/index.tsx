import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Blog</title>
      </Head>
      <Layout>テスト</Layout>
    </>
  );
}
