"use client";

import { FC, useCallback, useEffect, useState } from "react";
import { BlogItem } from "./BlogItem";
import { useGetBlogs } from "@/service/blogs/useGetBlogs";
import { useAddVote } from "@/service/blogs/useAddVote";
import { useDeleteBlog } from "@/service/blogs/useDeleteBlog";
import { useSWRConfig } from "swr";

export const BlogsList: FC<{}> = () => {
  const { data, mutate, error } = useGetBlogs();
  const [items, setItems] = useState(data ?? []);
  const { trigger } = useAddVote();

  const { trigger: deleteBlog } = useDeleteBlog();
  const { mutate: refetch } = useSWRConfig();

  const handleAddVote = useCallback(
    (id: string) => {
      trigger(id, {
        onSuccess: () => {
          items.forEach((e) => (e.id === id ? e.votes++ : null));
          mutate(items);
        },
      });
    },
    [items, mutate, trigger],
  );

  const handleDelete = useCallback(
    (id: string) => {
      deleteBlog(id, {
        onSuccess: () => refetch("/blogs"),
      });
    },
    [deleteBlog, refetch],
  );

  useEffect(() => {
    setItems(data ?? []);
  }, [data]);

  if (error) {
    return (
      <div className="items-center justify-center ">
        <p>Something Went Wrong :(</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4 py-20 ">
      {items &&
        items.map((e) => (
          <BlogItem
            key={e.id}
            blog={e}
            onAddVote={handleAddVote}
            onDelete={handleDelete}
          />
        ))}
    </div>
  );
};
