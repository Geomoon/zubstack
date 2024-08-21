import { ResultBlogDTO } from "@/models/blog";
import Link from "next/link";
import { FC } from "react";
import { FaArrowRightLong, FaTag } from "react-icons/fa6";

type props = {
  item: ResultBlogDTO;
  onGoto?: (id: string) => void;
};

export const BlogListItem: FC<props> = ({ item, onGoto }) => {
  return (
    <Link href={`/${item.id}`}>
      <li className="group hover:border-neutral-800 hover:border space-y-2 px-2 rounded-md border-b-neutral-800 border-b py-2 mt-2 cursor-pointer">
        <p className="group-hover:font-bold">{item.title}</p>
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-2 font-mono text-sm rounded-full border border-neutral-800 py-1 px-2">
            <FaTag color="#D1CDC7" /> {item.tags}
          </div>

          <div className="flex-1 group-hover:flex gap-2 justify-end items-center hidden font-mono text-sm ">
            Go to <FaArrowRightLong />
          </div>
        </div>
      </li>
    </Link>
  );
};
