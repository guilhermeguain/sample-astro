import { useState, useCallback } from "react";

import type { PostProps } from "@/lib/strapi/types";

export const usePostsGrid = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const handleSortClick = useCallback(() => {
    setOrder((state) => (state === "asc" ? "desc" : "asc"));
    setPosts((state) => state.toReversed());
  }, []);

  return {
    posts,
    setPosts,
    order,
    setOrder,
    handleSortClick,
  };
};
