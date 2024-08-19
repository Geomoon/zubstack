import { BlogsApi } from "@/api/blogs";
import useSWRMutation from "swr/mutation";

export const useAddVote = () => {
  const handler = async (_: string, { arg }: { arg: string }) => {
    return await BlogsApi.addVote(arg);
  };

  return useSWRMutation("/blogs/addVote", handler, {});
};
