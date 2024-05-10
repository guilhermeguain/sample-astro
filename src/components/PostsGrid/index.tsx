import { useState, useCallback } from "react";
import { BsSortAlphaDown, BsSortAlphaUp } from "react-icons/bs";

import type { PostProps } from "@/lib/strapi/types";

import { When } from "@/components/shared/When";

import { PostCard } from "@/components/PostCard";

import type { PostsGridProps } from "./types";

export const PostsGrid = ({ posts: inheritPosts }: PostsGridProps) => {
  const [posts, setPosts] = useState<PostProps[]>(inheritPosts);
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const handleSortClick = useCallback(() => {
    setOrder((state) => (state === "asc" ? "desc" : "asc"));
    setPosts((state) => state.toReversed());
  }, []);

  return (
    <div className="text-white">
      <div className="flex justify-center my-8">
        <button
          onClick={handleSortClick}
          className="flex items-center justify-center gap-2 bg-gray-800 rounded-lg text-gray-50 text-sm font-semibold border border-gray-700 py-2 px-4"
        >
          Inverter ordem
          <When value={order === "asc"}>
            <BsSortAlphaDown size={20} />
          </When>
          <When value={order === "desc"}>
            <BsSortAlphaUp size={20} />
          </When>
        </button>
      </div>
      <ul className="flex flex-wrap flex-row justify-center gap-6 mb-20">
        {posts?.map((post) => (
          <li key={post.id} className="max-w-80">
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
