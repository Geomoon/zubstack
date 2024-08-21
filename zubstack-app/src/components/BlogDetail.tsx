"use client";

import { useGetBlogById } from "@/service/blogs/useGetBlogById";
import { FC } from "react";
import { FaTag, FaUser } from "react-icons/fa6";

type props = {
  id: string;
};

export const BlogDetail: FC<props> = ({ id }) => {
  const { data: blog, isLoading } = useGetBlogById(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-10 px-10 flex flex-col lg:max-w-[50vw] my-20">
      <div className="flex gap-2">
        <div className="flex items-center gap-2 font-mono text-sm rounded-full border border-neutral-800 py-1 px-2">
          <FaUser color="#D1CDC7" /> {blog?.author}
        </div>
        <div className="flex items-center gap-2 font-mono text-sm rounded-full border border-neutral-800 py-1 px-2">
          <FaTag color="#D1CDC7" /> {blog?.tags}
        </div>
      </div>
      <h3 className="pb-8 pt-2 font-bold text-3xl">{blog?.title}</h3>
      <div className="flex-1 pb-4">{blog?.content}</div>
      <div className="flex-1 text-[#D1CDC7]">{blog?.createdAt?.toString()}</div>
    </div>
  );
};
