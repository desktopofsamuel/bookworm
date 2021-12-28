import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Heading } from "@chakra-ui/react";
import Layout from "@/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Heading>Bookworm</Heading>
    </Layout>
  );
};

export default Home;
