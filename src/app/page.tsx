import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/edaad3ff-97a7-4501-8713-92b2d73a7e68-7jhibg.jpg",
  "https://utfs.io/f/acce6c30-2632-41ca-abbf-24ed8969b6c4-47en0y.jpg",
  "https://utfs.io/f/613e539c-9cde-4012-9fc7-5648b2f05ef5-552wup.jpg",
  "https://utfs.io/f/66564a2d-8cf9-4211-ab48-68ec2f892c7c-1riljc.jpg",
  "https://utfs.io/f/6171668b-fa9c-43f4-b200-cab71cbd6578-qyzqir.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}

        {[...mockImages, ...mockImages, ...mockImages].map((image, key) => (
          <div key={image.id + "-" + key} className="w-48">
            <img src={image.url} alt="food" />
          </div>
        ))}
      </div>
      Hello (AI Restaurant in Progress)
    </main>
  );
}
