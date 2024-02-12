import Head from "next/head";
import Image from "next/image";
import { Children, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.icon" />
        <title>NextJS Blog</title>
      </Head>
      <header>
        <Image src="/images/profile.png" width={100} height={100} alt="" />
        <h1>Sato</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
