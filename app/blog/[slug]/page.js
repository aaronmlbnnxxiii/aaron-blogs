import fs from "fs";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import styles from '../../styles/Blog.module.css'
import '../../styles/globals.css'


export function PageComponent({ frontmatter, markdown }) {
  return (
    <div className="!text-red-500 grid place-content-center">
      <h1 className="mt-20 text-black">{JSON.stringify(frontmatter)}</h1>
      <span>{frontmatter?.date}</span>
      <hr />
      <div className={styles["wrapper"]}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default async function Page({ params }) {
  const { slug } = params;
  const fileContent = matter(
    fs.readFileSync(`./content/blogs/${slug}.md`, "utf8")
  );
  let frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return <PageComponent frontmatter={frontmatter} markdown={markdown} />;
}

export async function generateStaticParams() {
  const filesInProjects = fs.readdirSync("./content/blogs");

  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf("."));
    return { slug: filename };
  });
  return paths.map((path) => ({
    slug: path.slug,
  }));
}
