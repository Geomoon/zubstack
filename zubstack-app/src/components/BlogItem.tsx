import { GetBlog } from "@/models/blog";
import Link from "next/link";
import { FC } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdArrowRoundUp } from "react-icons/io";
import { RiDeleteBack2Fill } from "react-icons/ri";

type BlogItemProps = {
  blog: GetBlog;
  onAddVote: (id: string) => void;
  onDelete?: (id: string) => void;
};

export const BlogItem: FC<BlogItemProps> = ({ blog, onAddVote, onDelete }) => {
  return (
    <div className="flex flex-row w-[60vw] space-x-2 border-neutral-800 p-5 border rounded-lg bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit ">
      <div>
        <div className="rounded-full bg-zinc-800 h-10 flex w-10 font-bold border border-neutral-800 items-center justify-center">
          {blog.author.substring(0, 1)}
        </div>
      </div>
      <div className="flex-1">
        <div className="h-10">
          <p className="font-bold text-[#D1CDC7]">{blog.author}</p>
          <p className="font-mono text-gray-300 text-sm">
            {blog.createdAt.toString()}
          </p>
        </div>

        <article className="py-2 w-full min-w-full">
          <h4 className="font-bold text-[24px] ">{blog.title}</h4>
          <div>{blog.content.substring(0, 200)}</div>
        </article>
        <div className="flex flex-row space-x-4 pt-2 text-[#D1CDC7] duration-1000 transition-all">
          <button
            type="button"
            onClick={() => onAddVote(blog.id)}
            className="flex flex-row flex-wrap pl-4 space-x-2 items-center font-mono text-center border border-neutral-800 px-2 py-1 rounded-full hover:text-white"
          >
            <p className="text-center">{blog.votes}</p>
            <IoMdArrowRoundUp />
          </button>
          {onDelete && (
            <button
              onClick={() => onDelete(blog.id)}
              type="button"
              className="group flex hover:bg-red-700 text-sm flex-row flex-wrap hover:space-x-2 transition duration-300 items-center font-mono text-center border border-neutral-800 px-2 py-1 rounded-full hover:text-white"
            >
              <p className="group-hover:block hidden">DELETE</p>
              <RiDeleteBack2Fill />
            </button>
          )}
          <div className="items-center flex flex-1 justify-end ">
            <Link
              href={`blog/${blog.id}`}
              className="flex flex-row space-x-4 items-center hover:space-x-6"
            >
              <p className="text-sm font-mono">READ MORE</p>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
