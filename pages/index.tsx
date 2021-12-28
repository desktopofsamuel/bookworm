import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import getPosts from "@/lib/getPosts";

const Home: NextPage = ({ posts }) => {
  return (
    <Layout>
      <Heading>Bookworm</Heading>
      {
        <UnorderedList>
          {posts.map((post) => (
            <ListItem key={post.id}>
              <Heading>{post.fields.Person}</Heading>
              <Text>{post.fields.Persondescription}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      }
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
