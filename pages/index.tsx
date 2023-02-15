import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { sanityClient, urlfor } from "../sanity";
import { post } from "../typings";

interface Props {
  posts: [post];
}

const Home: NextPage = (props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-2">
              Medium
            </span>{" "}
            is a place to read, write and connect
          </h1>
          <h2>
            it's easy amd free to post your thinking on any topic and connect
            with millions of readers
          </h2>
        </div>

        <img
          className="hidden md:inline-flex h-32 lg:h-full"
          src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2018/png/iconmonstr-medium-1.png&r=0&g=0&b=0"
          alt="medium"
        />
      </div>
    </div>
  );
};

export default Home;

//this is where the server prbuilds pages.
export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    
    author-> {
      name,
      image
    },
    slug,
    description,
    mainImage,`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
