import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";
import md from "markdown-it";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  frontmatter,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>
          Vikash Manda - frot-end developer Talks about React | NEXT |
          TypeScript | Math | CSS all things tech{" "}
        </title>
      </Head>
      <div className="-my-12 prose prose-p:text-lg dark:prose-a:text-white mx-auto dark:text-white/80">
        {/* <div className="relative h-40 w-40 rounded-full mb-16">
          <Image
            src={"/vikash.jpg"}
            fill
            alt="img"
            className="object-cover rounded-full "
          />
        </div> */}
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </>
  );
}

export async function getStaticProps<GetStaticProps>() {
  const fileName = fs.readFileSync(`posts/bio.md`, "utf-8");

  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
