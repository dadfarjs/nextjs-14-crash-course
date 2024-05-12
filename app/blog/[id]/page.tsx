"use client";

import { usePathname } from "next/navigation";

const PostPage = ({ params }: { params: { id: string } }) => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <>
      <h2 className="text-lg">Post Page</h2>
      <h3>Post ID: {params.id}</h3>
    </>
  );
};

export default PostPage;
