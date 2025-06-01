"use client"
import {
  Facebook,
  Twitter,
  Mail,
  Printer,
  Share2,
  User,
  CircleUserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import post from "@/utils/post.json";
import formatDateBn from "@/lib/utils/postDate";
import Related from "@/components/homepage/Related";
import { use } from "react";
export default function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug }= use(params);
  console.log(slug);

  const linkdata = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
    twitter: `https://twitter.com/intent/tweet?url=${window.location.href}&text=${post?.title}`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${post?.title}&summary=${post?.excerpt}`,
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row items-start sm:px-5">
      <section className="lg:w-[70%] p-2  font-bangla">
        <div className="relative">
          {/* Hero Image */}
          <div className="relative w-full sm:h-[400px] overflow-hidden rounded-lg">
            <img
              src={post?.featuredImage.sourceUrl || "/placeholder.svg"}
              alt={post?.featuredImage.altText || "Article Image"}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="hidden sm:block absolute bottom-5 left-0 right-0 p-6">
              <div
                className=" text-lg md:text-xl text-white font-medium leading-relaxed line-clamp-2"
                dangerouslySetInnerHTML={{
                  __html: post?.excerpt || "No excerpt available",
                }}
              ></div>
            </div>
          </div>

          {/* Red Header Banner with Title and Social Icons . This should be sticky top-0 when sroll down smothly*/}
          <div className="bg-[#D72424] rounded-xl  max-h-[140px] text-white p-4 sm:mx-5 mx-1 sm:absolute top-[170px] sm:top-[360px] left-0 right-0 z-10 ">
            <div className="flex-1 pr-4">
              <h1 className="text-md md:text-2xl font-bold leading-tight">
                {post?.title || "Article Title Not Available"}
              </h1>
            </div>

            <div className="flex justify-between items-end sticky top-0 z-50">
              {/* Author and Date Info */}
              <div className="flex items-center gap-2 mt-3 text-sm">
                <CircleUserRound className="h-7 w-7 " />
                <div className="flex flex-col items-start ">
                  <span>সম্পাদক </span>

                  <span>{formatDateBn(post?.date)}</span>
                </div>
              </div>
              {/* Social Share Icons */}
              <div className="flex  sm:gap-2 items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer  hover:bg-red-700 h-8 w-8"
                  onClick={() => window.open(linkdata.facebook, "_blank")}
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer  hover:bg-red-700 h-8 w-8"
                  onClick={() => window.open(linkdata.twitter, "_blank")}
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className=" cursor-pointer  hover:bg-red-700 h-8 w-8"
                  onClick={() => window.open(linkdata.linkedin, "_blank")}
                >
                  <Mail className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer  hover:bg-red-700 h-8 w-8"
                  onClick={() => window.print()}
                >
                  <Printer className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer hover:bg-red-700 h-8 w-8"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-6 space-y-4  sm:mt-[85px]">
          <div
            className=" leading-relaxed text-justify"
            dangerouslySetInnerHTML={{
              __html: post?.content || "No content available",
            }}
          ></div>
        </div>
      </section>
      <section className=" w-full  lg:w-[30%] p-2 h-full">
        <Related varriant="column" />
      </section>
    </div>
  );
}
