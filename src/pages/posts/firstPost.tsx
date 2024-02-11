import Link from "next/link";

const firstPost = () => {
  return (
    <div>
      <h1>最初の投稿ページ</h1>
      <Link href="/">
        <h2>Homeへ戻る</h2>
      </Link>
    </div>
  );
};

export default firstPost;
