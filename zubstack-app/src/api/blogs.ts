import { CreateBlog, GetBlog, Id } from "@/models/blog";
import { api } from "./api";

export const BlogsApi = {
  getAll: async (): Promise<GetBlog[]> => {
    const response = await api.get<GetBlog[]>("/blogs");
    return response.data;
  },
  create: async (data: CreateBlog): Promise<Id> => {
    const response = await api.post("/blogs", data);
    return response.data;
  },
  addVote: async (id: string): Promise<void> => {
    const response = await api.patch(`/blogs/${id}`);
    return response.data;
  },
  onDelete: async (id: string): Promise<void> => {
    const response = await api.delete(`/blogs/${id}`);
    return response.data;
  },
};
