import { BlogsApi } from "@/api/blogs";
import { SearchBlogByDTO } from "@/models/blog";
import useSWRMutation from "swr/mutation";

export const useSearchBlogs = () => {
  const handler = async (_: string, { arg }: { arg: SearchBlogByDTO }) => {
    return await BlogsApi.getByTitleAndTags(arg.title, arg.tags);
  };

  return useSWRMutation("/blogs/search", handler);
};
