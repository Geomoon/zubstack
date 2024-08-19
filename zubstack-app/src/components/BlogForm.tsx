"use client";

import { useCreateBlog } from "@/service/blogs/useCreateBlog";
import { FC, useCallback, useState } from "react";
import { IoSend } from "react-icons/io5";

export const BlogForm: FC<{}> = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [isTitleError, setIsTitleError] = useState(false);
  const [isContentError, setIsContentError] = useState(false);
  const [isAuthorError, setIsAuthorError] = useState(false);

  const { trigger } = useCreateBlog();

  const submit = useCallback(() => {
    setIsTitleError(title === "");
    setIsContentError(content === "");
    setIsAuthorError(author === "");
    if (title === "" || content === "" || author === "") return;

    trigger(
      { title, content, tags: "tech", author },
      {
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    );
  }, [author, content, title, trigger]);

  return (
    <div className="flex flex-col lg:max-w-[50vw] w-full justify-center pt-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`text-3xl font-bold border-b-neutral-800 bg-transparent border-b py-2 focus:border-b-neutral-500 ${
          isTitleError && "border-b-red-700"
        }`}
      />
      <div className="flex flex-1 my-10">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write content here..."
          className={`w-full min-h-72 resize-none p-4 rounded-lg border-neutral-800 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit border focus:border-neutral-500 ${
            isContentError && "border-b-red-700"
          }`}
        />
      </div>
      <div className="flex flex-row justify-end">
        <div className="flex-1 flex">
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className={`bg-transparent border-b-neutral-800 border-b ${
              isAuthorError && "border-b-red-700"
            }`}
          />
        </div>
        <button
          type="button"
          onClick={submit}
          className="py-2 px-4 rounded-md font-bold bg-blue-600 flex items-center space-x-2 hover:space-x-4"
        >
          <p>Post</p>
          <IoSend />
        </button>
      </div>
    </div>
  );
};
