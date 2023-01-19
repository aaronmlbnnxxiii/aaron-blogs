import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import styles from "./styles/Home.module.css";

export function PageComponent({ blogs }) {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1>Welcome to my blog</h1>
      <p>This is a subtitle idk what to type here</p>
      <ul className="flex flex-col gap-y-2 text-cyan-500 font-bold">
        {blogs?.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              {blog.date}: {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function Page() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync("./content/blogs");

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return <PageComponent blogs={blogs} />;
}
