import { IoSend } from "react-icons/io5";

export default function NewBlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 before:fixed before:top-44 before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:z-[-1] before:content-[''] after:fixed after:z-[-1] after:h-[180px] after:w-full after:top-20 after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      <div className=" w-full max-w-5xl items-center justify-between">
        <p className="text-[24pt] text-center items-center line-clamp-5 tracking-widest h-14 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit z-10">
          <span className="font-mono">Zub</span>
          <span className="font-bold">Stack</span>
          <span className="px-4">/</span>
          <span className="text-lg">New Blog</span>
        </p>
      </div>

      <div className="flex flex-col lg:max-w-[50vw] w-full justify-center pt-4">
        <input
          type="text"
          placeholder="Title"
          className="text-3xl font-bold border-b-neutral-800 bg-transparent border-b py-2 focus:border-b-neutral-500"
        />
        <div className="flex flex-1 my-10">
          <textarea
            placeholder="Write content here..."
            className="w-full min-h-72 resize-none p-4 rounded-lg border-neutral-800 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit border focus:border-neutral-500"
          />
        </div>
        <div className="flex flex-row justify-end">
          <button
            type="button"
            className="py-2 px-4 rounded-md font-bold bg-blue-600 flex items-center space-x-2 hover:space-x-4"
          >
            <p>Post</p>
            <IoSend />
          </button>
        </div>
      </div>

      <div></div>
    </main>
  );
}
