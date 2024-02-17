import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

type PostMetaData = {
  title: string;
  date: string;
  thumbnail: string;
};

// mdファイルのデータを取り出す
export const getPostsData = (): PostMetaData[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    // matterResult.dataに型アサーションを使用
    const metaData = matterResult.data as PostMetaData;

    return {
      id,
      ...metaData,
    };
  });
  return allPostsData;
};
