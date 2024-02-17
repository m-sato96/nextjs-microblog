import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import { getPostsData } from "@/lib/post";

const inter = Inter({ subsets: ["latin"] });

type Post = {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
};
type Props = {
  allPostsData: Post[];
};

// SSGの場合
export const getStaticProps = async () => {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
export default function Home({ allPostsData }: Props) {
  return (
    <>
      <Head>
        <title>Next.js Blog</title>
      </Head>
      <Layout>
        <div className="grid grid-cols-3 gap-2.5 gap-y-5">
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id} className="w-[300px] mx-auto">
              <Link href={`/posts/${id}`}>
                <img className="mb-2 rounded-sm" src="https://picsum.photos/300/300" alt={title} />
                <p>{title}</p>
                <small>{date}</small>
              </Link>
            </article>
          ))}
        </div>
      </Layout>
    </>
  );
}
