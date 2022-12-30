import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import md from "markdown-it";
import Head from "next/head";

export default function Home({
  frontmatter,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <div className=" prose prose-p:text-lg dark:prose-h2:text-white dark:prose-code:text-white dark:prose-a:text-white mx-auto dark:text-white/80">
        <h1 className="dark:text-white/90">{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Retrieve all our slugs
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as any;
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
};
