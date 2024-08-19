import { BlogsApi } from "@/api/blogs";
import useSWR from "swr";

export const useGetBlogs = () => {
  return useSWR("/blogs", BlogsApi.getAll);
};
