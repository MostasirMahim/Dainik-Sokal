import { CategoryFeturedPostCard, ListCard } from "../Card";
import posts from "@/utils/posts.json";
import post from "@/utils/post.json";
function CategoryBack({ category }: { category: string }) {
  console.log(category);
  const Posts = posts.data.slice(0, 10);
  const feturedPost = Posts[0];
  const relatedPosts = Posts.slice(1, 7);
  return (
    <div className="relative w-full font-bangla bg-background text-foreground">
      {/* Hero Image */}
      <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden rounded-lg">
        {/* Background Image */}
        <img
          src={"/placeholder.svg"}
          alt={post?.featuredImage.altText || "Article Image"}
          className="w-full h-full object-cover object-center"
        />

        {/* Bottom Shadow Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Text Overlay */}
        <div className="absolute bottom-10 left-0 right-0 p-4 md:p-6 flex items-center gap-2">
          <div className="py-4 bg-red-600 w-[5px]"></div>
          <p className=" text-lg md:text-2xl font-medium leading-relaxed">
            {category || "Coming"}
          </p>
        </div>
      </div>

      {/* CategoryGrid positioned normally with negative margin for overlap effect */}
      <div className="-mt-12 md:-mt-16 px-4 md:px-10 relative z-10">
        <div className="mx-auto rounded-2xl p-2 font-bangla w-full shadow-md">
          <div className="flex flex-col md:flex-row w-full items-stretch border  rounded-xl overflow-hidden">
            {/* Left Column - Main Featured Article */}
            <div className="flex flex-col md:w-1/2 lg:w-3/5 p-2 md:p-4 space-y-3 md:space-y-4 overflow-hidden dark:bg-black bg-white">
              <CategoryFeturedPostCard feturedPost={feturedPost} />
            </div>

            {/* Right Column - Article List */}
            <div className="md:w-1/2 lg:w-2/5 flex flex-col overflow-y-auto max-h-[400px] md:max-h-none border-t md:border-t-0 md:border-l border-[#ADADAD] dark:bg-black bg-white">
              {relatedPosts?.map((post, index) => (
                <ListCard key={index} article={post} />
              ))}
            </div>
          </div>

         <div className="flex justify-end">
           <p className="text-end text-sm my-2 w-fit bg-red-50 p-2 rounded-md font-medium hover:text-[#ff000076] cursor-pointer text-[#FF0000]">
            আরো দেখুন
          </p>
         </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBack;
