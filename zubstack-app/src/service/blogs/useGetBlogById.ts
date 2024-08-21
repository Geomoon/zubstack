import { BlogsApi } from "@/api/blogs";
import useSWR from "swr";

export const useGetBlogById = (id: string) => {
  const fetcher = async () => await BlogsApi.getById(id);
  return useSWR(`/blogs/${id}`, fetcher);
};
