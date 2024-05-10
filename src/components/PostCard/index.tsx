import dayjs from "dayjs";

import type { PostProps } from "@/lib/strapi/types";

export const PostCard = ({ attributes }: PostProps) => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 bg-gradient-to-br hover:from-gray-800 hover:to-violet-900 overflow-hidden">
      <a href={`/blog/${attributes.slug}/`}>
        <img
          src={`${import.meta.env.PUBLIC_STRAPI_URL}${
            attributes.featuredImage?.data?.attributes.url
          }`}
          alt={attributes.featuredImage?.data?.attributes.alternativeText}
          width={attributes.featuredImage?.data?.attributes.width}
          height={attributes.featuredImage?.data?.attributes.height}
        />
        <div className="flex flex-col gap-2 p-4">
          <span className="text-gray-400 font-semibold text-sm">
            {dayjs(attributes.publishedAt).format("DD/MM/YYYY")}
          </span>
          <h2 className="text-gray-50 font-semibold text-xl">
            {attributes.title}
          </h2>
        </div>
      </a>
    </div>
  );
};
