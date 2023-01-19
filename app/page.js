import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export function PageComponent({ projects }) {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1>Welcome to my blog</h1>
      <p>This is a subtitle idk what to type here</p>
      <ul className="flex flex-col gap-y-2 text-cyan-500 font-bold">
        {projects?.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/projects/${blog.slug}`}>
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
  const filesInprojects = fs.readdirSync("./content/projects");

  // Get the front matter and slug (the filename without .md) of all files
  const projects = filesInprojects.map((filename) => {
    const file = fs.readFileSync(`./content/projects/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return <PageComponent projects={projects} />;
}
