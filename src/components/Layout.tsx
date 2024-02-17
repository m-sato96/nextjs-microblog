import Head from "next/head";
import Image from "next/image";
import { Children, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" max-w-5xl m-auto p-10 ">
      <Head>
        <link rel="icon" href="/favicon.icon" />
        <title>NextJS Blog</title>
      </Head>
      <header className="flex items-center flex-col mb-4">
        <Image className="mb-2 block rounded-full" src="/images/profile.png" width={100} height={100} alt="" />
        <h1 className="tex-sm font-medium">Sato</h1>
        <p>私はフロントエンドエンジニアです🍍</p>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
