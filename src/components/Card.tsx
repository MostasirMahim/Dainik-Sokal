"use client";
import getRelativeTimeBn from "@/lib/utils/getRelativeTime";
import { Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export function ListCard({ article }: { article: any }) {
  if (!article) return null;
   const router = useRouter();
  
  return (
    <div>
      <div className="flex p-3  rounded transition-colors cursor-pointer" onClick={() => router.push(`/${article.categories[0].slug}/${article.slug}`)}>
        <div className="flex-1 space-y-1">
          <h3 className="font-medium text-sm leading-tight line-clamp-2">
            {article?.title}
          </h3>
          <div className="flex items-center gap-2 text-xs ">
            <Clock className="w-3 h-3" />
            <p suppressHydrationWarning>{getRelativeTimeBn(article?.date)}</p>
          </div>
        </div>
        <div className="aspect-[11/8] w-16 rounded flex-shrink-0">
          <img
            src={
              article?.featuredImage.sourceUrl ||
              "/placeholder.svg?height=150&width=250"
            }
            alt={article?.featuredImage.altText || "News thumbnail"}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
      <div className="border-b light:border-[#ADADAD]"></div>
    </div>
  );
}

export function ImageCard({ article }: { article: any }) {
  if (!article) return null;
   const router = useRouter();
  return (
    <div className="space-y-3" onClick={() => router.push(`/${article.categories[0].slug}/${article.slug}`)}>
      <div className="aspect-video  rounded">
        <img
          src={
            article?.featuredImage.sourceUrl ||
            "/placeholder.svg?height=150&width=250"
          }
          alt={article?.featuredImage.altText || "News thumbnail"}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <h3 className="font-semibold text-sm leading-tight line-clamp-3">
        {article?.title}
      </h3>
    </div>
  );
}
export function FeturedPostCard({ feturedPost }: { feturedPost: any }) {
  if (!feturedPost) return null;
   const router = useRouter();
  return (
    <div className="space-y-3" onClick={() => router.push(`/${feturedPost.categories[0].slug}/${feturedPost.slug}`)}>
      <div className="aspect-videorounded">
        <img
          src={
            feturedPost?.featuredImage.sourceUrl ||
            "/placeholder.svg?height=300&width=600"
          }
          alt={feturedPost?.featuredImage.altText || "News thumbnail"}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-xl lg:text-2xl font-bold  leading-tight ">
        {feturedPost?.title}
      </h1>
      <div
        className="hidden sm:block line-clamp-3  font-medium text-base leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: (feturedPost?.excerpt || "সংবাদ লোড হচ্ছে...").replace(
            /<p>/g,
            '<p class="line-clamp-2">'
          ),
        }}
      ></div>
    </div>
  );
}

export function CategoryFeturedPostCard({ feturedPost }: { feturedPost: any }) {
  if (!feturedPost) return null;
   const router = useRouter();
  return (
    <>
      <div className="aspect-video rounded-xl overflow-hidden" onClick={() => router.push(`/${feturedPost.categories[0].slug}/${feturedPost.slug}`)}>
        <img
          src={
            feturedPost?.featuredImage.sourceUrl ||
            "/placeholder.svg?height=300&width=600" ||
            "/placeholder.svg"
          }
          alt={feturedPost?.featuredImage.altText || "News thumbnail"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main headline */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight ">
        {feturedPost?.title}
      </h1>

      {/* Description */}
      <div
        className="hidden sm:block  font-medium text-sm md:text-base leading-relaxed "
        dangerouslySetInnerHTML={{ __html: feturedPost?.excerpt || " " }}
      ></div>
    </>
  );
}

export function CategoryListCard({ article }: { article: any }) {
  if (!article) return null;
  const router = useRouter();
  return (
    <div className="flex justify-between w-full items-center p-3" onClick={() => router.push(`/${article.categories[0].slug}/${article.slug}`)}>
      <div className="flex-1">
        <h3 className="font-semibold  mb-2 line-clamp-3 text-sm leading-tight">
          {article.title}
        </h3>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 0" />
          <p className="text-xs ">{getRelativeTimeBn(article.date)}</p>
        </div>
      </div>
      <div className="w-24 aspect-[11/8] ">
        <img
          src={article.featuredImage.sourceUrl || "/placeholder.svg"}
          alt={article.featuredImage.altText || "News thumbnail"}
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );
}

export function CategoryImageCard({ article }: { article: any }) {
  if (!article) return null;
   const router = useRouter();
  return (
    <div className="">
      <img
        src={article.featuredImage.sourceUrl || "/placeholder.svg"}
        alt={article.featuredImage.altText || "News thumbnail"}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold mb-3 light:hover:text-rose-600 transition-colors duration-200 line-clamp-2 leading-relaxed">
          {article.title}
        </h3>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 " />
          <p className="text-sm">{getRelativeTimeBn(article.date)}</p>
        </div>
      </div>
    </div>
  );
}
