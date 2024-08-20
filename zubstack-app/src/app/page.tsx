import { AddPostButton } from "@/components/AddPostButton";
import { BlogsList } from "@/components/BlogsList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 before:fixed before:top-44 before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:z-[-1] before:content-[''] after:fixed after:z-[-1] after:h-[180px] after:w-full after:top-20 after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      <div className=" w-full max-w-5xl items-center justify-between">
        <div className="text-[24pt] text-center items-center line-clamp-5 tracking-widest h-14 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit z-10">
          <div className="flex-1"></div>
          <div className="flex flex-1 justify-center">
            <span className="font-mono">Zub</span>
            <span className="font-bold">Stack</span>
          </div>
          <div className="flex flex-1 justify-end">
            <AddPostButton />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center place-items-center pt-4">
        <div className="flex flex-row w-full justify-center">
          <BlogsList />
        </div>
      </div>

      <div></div>
    </main>
  );
}
