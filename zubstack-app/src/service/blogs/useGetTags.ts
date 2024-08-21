import { BlogsApi } from "@/api/blogs";
import useSWR from "swr";

export const useGetTags = () => {
  return useSWR("/blogs/tags", BlogsApi.getTags);
};
