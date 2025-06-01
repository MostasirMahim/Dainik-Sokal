"use client";

import { Clock } from "lucide-react";
import post from "@/utils/posts.json";
import getRelativeTimeBn from "@/lib/utils/getRelativeTime";
import { useRouter } from "next/navigation";

export default function CategoryLine() {
  const router = useRouter();
  const article = post.data.slice(0, 1)[0];
  const topArticles = post.data.slice(1, 3); // 2 articles with images
  const bottomArticles = post.data.slice(3, 7); // 4 articles text only

  return (
    <div className="w-full bg-background text-foreground border light:border-gray-300 rounded-lg overflow-hidden font-bangla">
      {/* Header */}
      <header className="flex items-center justify-between p-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-red-600"></div>
          <h1 className="text-lg font-bold">
            {article.categories[0]?.name || "রাজনীতি"}
          </h1>
        </div>
        <button className="text-red-600 text-sm font-medium hover:underline">
          আরো দেখুন
        </button>
      </header>

      {/* Main content */}
      <div className="p-4">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {/* Left Half - Main Featured Article */}
          <div className="space-y-3" onClick={() => router.push(`/${article.categories[0].slug}/${article.slug}`)}>
            <div className="relative">
              <img
                src={article.featuredImage.sourceUrl || "/placeholder.svg"}
                alt={article.featuredImage.altText}
                className="w-full h-48 object-cover rounded"
              />
            </div>
            <h2 className="text-lg font-bold leading-tight ">
              {article.title}
            </h2>
            <div className=" text-sm leading-relaxed md:line-clamp-2 lg:line-clamp-3"
              dangerouslySetInnerHTML={{ __html: article.excerpt }}>
              
            </div>
            <div className="flex items-center gap-2 text-xs ">
              <Clock className="w-3 h-3" />
              <span>{getRelativeTimeBn(article.date)}</span>
            </div>
          </div>

          {/* Right Half - Grid of smaller articles */}
          <div className="space-y-4 flex flex-col justify-between">
            {/* Top Row - 2 articles with images */}
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-3">
              {topArticles.map((item, index) => (
                <article key={index} className="space-y-2" onClick={() => router.push(`/${item.categories[0].slug}/${item.slug}`)}>
                  <div className="relative">
                    <img
                      src={item.featuredImage.sourceUrl || "/placeholder.svg"}
                      alt={item.featuredImage.altText}
                      className="w-full h-20 object-cover rounded "
                    />
                  </div>
                  <h3 className="font-semibold text-sm leading-tight line-clamp-3">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs ">
                    <Clock className="w-3 h-3" />
                    <span>{getRelativeTimeBn(item.date)}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Section - Text only articles in 2 columns */}
            <div className="hidden lg:grid grid-cols-3 flex-1 ">
              {bottomArticles.map((item, index) => (
                <article
                  key={index + 2}
                  className="space-y-1 flex flex-col justify-center "
                  onClick={() => router.push(`/${item.categories[0].slug}/${item.slug}`)}
                >
                  <h3 className="font-semibold text-sm leading-tight line-clamp-3">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs ">
                    <Clock className="w-3 h-3" />
                    <span>{getRelativeTimeBn(item.date)}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="md:hidden space-y-4 bg-background text-foreground">
          {/* Main Featured Article */}
          <article className="space-y-3" onClick={() => router.push(`/${article.categories[0].slug}/${article.slug}`)}>
            <div className="relative">
              <img
                src={article.featuredImage.sourceUrl || "/placeholder.svg"}
                alt={article.featuredImage.altText}
                className="w-full h-48 object-cover rounded"
              />
            </div>
            <h2 className="text-lg font-bold leading-tight ">
              {article.title}
            </h2>
            <div className=" text-sm leading-relaxed line-clamp-3"
              dangerouslySetInnerHTML={{ __html: article.excerpt }}>
              
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Clock className="w-3 h-3" />
              <span>{getRelativeTimeBn(article.date)}</span>
            </div>
          </article>

          {/* All other articles stacked vertically */}
          <div className="space-y-3">
            {[...topArticles, ...bottomArticles].map((item, index) => (
              <article
                key={index}
                className="flex gap-3 p-3 border-b border-gray-100 last:border-b-0"
                onClick={() => router.push(`/${item.categories[0].slug}/${item.slug}`)}
              >
                <div className="flex-1 space-y-1">
                  <h3 className="font-semibold text-sm leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs ">
                    <Clock className="w-3 h-3" />
                    <span>{getRelativeTimeBn(item.date)}</span>
                  </div>
                </div>

                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={item.featuredImage.sourceUrl || "/placeholder.svg"}
                    alt={item.featuredImage.altText}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
