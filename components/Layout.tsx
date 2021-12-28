import Head from "next/head";
import Link from "next/link";
import { Container, Grid, Box } from "@chakra-ui/react";

export default function Layout({
  title,
  keywords,
  description,
  children,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Container maxW="container.lg">{children}</Container>
    </>
  );
}

type LayoutProps = {
  title: string;
  description: string;
  keywords: string;
  children: React.ReactNode;
};

const defaultProps: LayoutProps = {
  title: "DJ Events | Find the parties",
  description: "Find the latest DJ parties",
  keywords: "music, dj, events, parties",
  children: "",
};

Layout.defaultProps = defaultProps;
