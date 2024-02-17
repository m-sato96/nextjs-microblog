import Head from "next/head";
import Link from "next/link";

const firstPost = () => {
  return (
    <>
      <Head>
        <title>最初の投稿</title>
      </Head>
      <h1>最初の投稿ページ</h1>
      <Link href="/">
        <h2>Homeへ戻る</h2>
      </Link>
    </>
  );
};

export default firstPost;
