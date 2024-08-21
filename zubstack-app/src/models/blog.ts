interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  tags: string;
  votes: number;
  createdAt: Date;
}

export type GetBlog = Blog;

export type CreateBlog = Omit<Blog, "id" | "createdAt" | "votes">;

export type Id = Pick<Blog, "id">;

export type ResultBlogDTO = Pick<Blog, "id" | "title" | "tags">;

export type SearchBlogByDTO = Pick<Blog, "title" | "tags">;
