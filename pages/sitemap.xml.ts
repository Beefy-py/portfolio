import { GetServerSideProps } from "next";
import sanity from "../utils/sanityClient";

type Post = {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  author: {
    _ref: string;
    _type: string;
  };
  body: [[Object], [Object]];
  categories: [[Object]];
  mainImage: { _type: string; asset: [Object] };
  slug: { _type: string; current: string };
  title: string;
  excerpt: string;
};

const baseUrl = process.env.BASE_URL;

function generateSiteMap(posts: Post[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${baseUrl}/studio</loc>
     </url>
     <url>
       <loc>${baseUrl}/blog</loc>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${baseUrl}/blog/${slug.current}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = await sanity.fetch(`*[_type == "post"]`);

  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");

  // send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
