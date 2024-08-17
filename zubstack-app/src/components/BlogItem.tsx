import { FC } from "react";

type BlogItemProps = {};

export const BlogItem: FC<BlogItemProps> = () => {
  return (
    <div className="flex flex-row w-[60vw] bg-black space-x-2 border-neutral-800 p-4 border rounded-lg">
      <div>
        <div className="rounded-full h-10 flex w-10 font-bold border border-neutral-800 items-center justify-center">
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

        <article className="pt-2">
          <h4 className="font-bold text-[24px] ">
            Native App Development is Dead
          </h4>
          <div>
            Long live cross-platform solutions! They’re doing such a good job
            these days that it’s getting harder and harder to justify going for
            native.
          </div>
        </article>
        <div className="flex flex-row space-x-4">
          <div></div>
        </div>
      </div>
    </div>
  );
};
