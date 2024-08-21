"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGetTags } from "@/service/blogs/useGetTags";
import { useSearchBlogs } from "@/service/blogs/useSearchBlogs";
import { FC, useCallback, useState } from "react";
import { FaFilter, FaTag } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { BlogListItem } from "./BlogListItem";

export const SearchSheet: FC<{}> = () => {
  const { trigger: search, data, isMutating } = useSearchBlogs();

  const { data: tagsList } = useGetTags();

  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  const onChangeTitle = useCallback(
    (value: string) => {
      search({ title: value, tags });
      setTitle(value);
    },
    [search, tags],
  );

  const onChangeTags = useCallback(
    (value: string) => {
      search({ title, tags: value });
      setTags(value);
    },
    [search, title],
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="group flex text-lg tracking-normal hover:text-white text-[#D1CDC7] font-bold items-center gap-2">
          <FiSearch fontSize={24} />
          <p className="group-hover:inline-block hidden">Search</p>
        </button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="border-r-neutral-800 border-r bg-black"
      >
        <SheetHeader>
          <SheetTitle>
            <FaFilter color="#D1CDC7" />
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-8">
          <input
            placeholder="Search by title"
            type="text"
            className="w-full py-2 px-4 rounded-lg border-neutral-800 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit border focus:border-neutral-500 "
            onChange={(e) => onChangeTitle(e.target.value)}
          />

          <div className="flex flex-row gap-4 items-center pl-2">
            <FaTag /> By Tag
            <select
              className="flex-1 bg-transparent py-2 px-4 border-neutral-800 border rounded-lg outline-none"
              onChange={(e) => onChangeTags(e.target.value)}
              defaultChecked={false}
            >
              <option value="" className="text-neutral-400">
                Select a tag
              </option>
              {tagsList?.map((e) => <option key={e}>{e}</option>)}
            </select>
          </div>
          <hr className="border-neutral-800 my-2" />
          <ul className="flex flex-col">
            {data?.map((e) => <BlogListItem item={e} key={e.id} />)}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};
