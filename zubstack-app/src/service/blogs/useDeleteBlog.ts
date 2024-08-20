import { BlogsApi } from "@/api/blogs";
import useSWRMutation from "swr/mutation";

export const useDeleteBlog = () => {
  const handler = async (_: string, { arg }: { arg: string }) => {
    return await BlogsApi.onDelete(arg);
  };
  return useSWRMutation("/blogs/delete", handler);
};
