import { BlogsApi } from "@/api/blogs";
import { CreateBlog } from "@/models/blog";
import useSWRMutation from "swr/mutation";

export const useCreateBlog = () => {
  const fetchFn = async (url: string, { arg }: { arg: CreateBlog }) => {
    const res = await BlogsApi.create(arg);
    return res;
  };
  return useSWRMutation("/blogs/create", fetchFn, {});
};
