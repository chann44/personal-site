import Head from "next/head";
import Link from "next/link";

const BlogSection = ({ year }: { year: string }) => {
  return (
    <div>
      <h2 className="text-9xl font-extrabold dark:text-white/50">{year}</h2>
    </div>
  );
};

const BlogCard = ({ title, date }: { title: string; date: string }) => {
  return (
    <div className="  px-4 md:px-12 py-8 relative -top-20 space-y-3 group">
      <h1 className="dark:text-white/50 cursor-pointer active:scale-95 text-lg md:text-2xl font-extrabold dark:group-hover:text-white transition transform duration-300 ease-in ">
        {title}
      </h1>
      <p className="text-sm">{date}</p>
    </div>
  );
};

interface Props {
  bloglist: any;
}

const BlogList = ({ bloglist }: Props) => {
  return (
    <>
      <div className="relative ">
        <div className="opacity-10">
          <BlogSection year={bloglist.year} />
        </div>
        <div>
          {bloglist.posts?.map((blog: any, index: number) => {
            return (
              <Link href={`/blog/${blog.slug}`} key={index}>
                <BlogCard
                  title={blog.frontmatter.title}
                  date={blog.frontmatter.date}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogList;
