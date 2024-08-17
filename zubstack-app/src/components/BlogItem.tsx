import { FC } from "react";

type BlogItemProps = {};

export const BlogItem: FC<BlogItemProps> = () => {
  return (
    <div className="flex flex-row w-52 bg-black border-neutral-800 p-4 border rounded-lg">
      <div>AVATAR</div>
      <div>content</div>
    </div>
  );
};
