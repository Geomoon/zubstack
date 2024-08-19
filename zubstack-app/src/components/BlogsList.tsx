"use client";

import { FC, useCallback, useEffect, useState } from "react";
import { BlogItem } from "./BlogItem";
import { useGetBlogs } from "@/service/blogs/useGetBlogs";
import { useAddVote } from "@/service/blogs/useAddVote";

export const BlogsList: FC<{}> = () => {
  const { data, mutate, error } = useGetBlogs();
  const [items, setItems] = useState(data ?? []);
  const { trigger } = useAddVote();

  const handleAddVote = useCallback(
    (id: string) => {
      trigger(id, {
        onSuccess: () => {
          items.forEach((e) => (e.id === id ? e.votes++ : null));
          // setItems(items);

          mutate(items);
        },
      });
    },
    [items, mutate, trigger],
  );

  useEffect(() => {
    setItems(data ?? []);
  }, [data]);

  return (
    <div className="flex flex-col space-y-4 py-20 ">
      {items &&
        items.map((e) => (
          <BlogItem key={e.id} blog={e} onAddVote={handleAddVote} />
        ))}
    </div>
  );
};
