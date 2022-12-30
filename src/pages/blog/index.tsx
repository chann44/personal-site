import { BlogList } from "../../componets";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

const Index = ({
  postByYear,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(postByYear);
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="dark:text-white/70">
        <div className="space-y-5 mb-16">
          <h1 className="text-4xl dark:text-white font-extrabold">Blog</h1>
          <p>A Round-Up of My Writing </p>
        </div>
        <div>
          {postByYear.map((list, Index) => {
            return <BlogList bloglist={list} key={Index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Index;

export async function getStaticProps<GetStaticProps>() {
  // Get all our posts
  const files = fs.readdirSync("posts");

  let years: string[] = [];
  const postByYear: any[] = [];

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  posts.map((post) => {
    if (post.frontmatter.year && years.length == 0) {
      console.log("first time", years);
      years.push(post.frontmatter.year);
    }
    years.map((yr) => {
      if (yr) {
        years.push(post.frontmatter.year);
      }
    });
  });

  function onlyUnique(value: any, index: number, self: any) {
    return self.indexOf(value) === index;
  }

  years = years.filter(onlyUnique);

  years.map((yr) => {
    console.log(yr);
    postByYear.push({ year: yr, posts: [] });
  });

  posts.map((post) => {
    postByYear.map((obj) => {
      if (obj.year === post.frontmatter.year) {
        if (obj.posts) {
          obj.posts.push(post);
        }
      }
      obj.posts
        .sort((a: any, b: any) => a.frontmatter.day - b.frontmatter.day)
        .reverse();
    });
  });
  postByYear.sort((a, b) => b.value - a.value).reverse();
  return {
    props: {
      postByYear,
    },
  };
}
