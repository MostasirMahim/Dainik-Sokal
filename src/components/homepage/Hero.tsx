"use client";
import posts from "@/utils/posts.json";
import { FeturedPostCard, ImageCard, ListCard } from "../Card";

export default function Hero() {
  const Posts = posts.data.slice(0, 10); 
  const feturedPost = Posts[0]; 
  const secondaryPostsLarge = Posts.slice(1, 3); 
  const relatedPosts = Posts.slice(2, 10); 

  return (
    <div className="w-full h-screen mx-auto font-bangla">
      {/* Desktop/Tablet Layout */}
      <div className="flex flex-col lg:flex-row w-full h-screen lg:gap-4  rounded-xl">
        {/* Left Column - Main Featured Article */}
        <div className="space-y-2 flex-1 lg:w-[60%] lg:border pb-1 border-[#9D9595] sm:rounded-xl p-2  ">
          <FeturedPostCard feturedPost={feturedPost} />

          {/* Secondary articles at bottom for large */}
          <div className="hidden lg:grid grid-cols-2 gap-4 pt-4">
            {secondaryPostsLarge?.map((post, index) => (
              <ImageCard key={index} article={post} />
            ))}
          </div>
        </div>

        {/* Right Column - Article List (Desktop/Tablet only) */}
        <div className=" lg:flex flex-col items-center justify-between lg:border border-[#9D9595] sm:rounded-xl px-2 overflow-y-auto h-screen  lg:w-[40%]">
          {relatedPosts?.map((post, index) => (
            <ListCard key={index} article={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
