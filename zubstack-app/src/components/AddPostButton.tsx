import Link from "next/link";
import { FC } from "react";
import { FaNewspaper } from "react-icons/fa6";

export const AddPostButton: FC<{}> = () => {
  return (
    <Link
      href={"new"}
      type="button"
      className="flex text-[#D1CDC7] hover:text-white tracking-normal items-center space-x-2 text-lg font-bold border rounded-md py-2 px-4 border-neutral-800 mx-4"
    >
      <FaNewspaper />
      <p>Add Post</p>
    </Link>
  );
};
