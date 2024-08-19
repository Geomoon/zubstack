import Link from "next/link";
import { FC } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdArrowRoundUp } from "react-icons/io";

type BlogItemProps = {};

export const BlogItem: FC<BlogItemProps> = () => {
  return (
    <div className="flex flex-row w-[60vw] space-x-2 border-neutral-800 p-5 border rounded-lg bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit ">
      <div>
        <div className="rounded-full bg-zinc-800 h-10 flex w-10 font-bold border border-neutral-800 items-center justify-center">
          A
        </div>
      </div>
      <div>
        <div className="h-10">
          <p className="font-bold text-[#D1CDC7]">Author Name</p>
          <p className="font-mono text-gray-300 text-sm">
            {new Date().toISOString()}
          </p>
        </div>

        <article className="py-2">
          <h4 className="font-bold text-[24px] ">
            Native App Development is Dead
          </h4>
          <div>
            Long live cross-platform solutions! They’re doing such a good job
            these days that it’s getting harder and harder to justify going for
            native.
          </div>
        </article>
        <div className="flex flex-row space-x-4 pt-2 text-[#D1CDC7] duration-1000 transition-all">
          <button
            type="button"
            className="flex flex-row flex-wrap space-x-2 items-center font-mono text-center border border-neutral-800 px-2 py-1 rounded-full hover:text-white"
          >
            <IoMdArrowRoundUp />
            <p className="text-center"> 45k </p>
          </button>
          <div className="items-center flex flex-1 justify-end ">
            <Link
              href={""}
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
