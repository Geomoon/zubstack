import { CreateBlog, GetBlog, Id, ResultBlogDTO } from "@/models/blog";
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
  getByTitleAndTags: async (
    title: string,
    tags: string,
  ): Promise<ResultBlogDTO[]> => {
    const response = await api.get("/blogs/search", {
      params: { title, tags },
    });
    return response.data;
  },
  getTags: async (): Promise<string[]> => {
    const response = await api.get("/blogs/tags");
    return response.data;
  },
  getById: async (id: string): Promise<GetBlog> => {
    const response = await api.get(`/blogs/${id}`);
    return response.data;
  },
};
