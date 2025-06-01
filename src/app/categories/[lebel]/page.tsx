"use client";
import CategoryBack from "@/components/category/category-back";
import CategorySliders from "@/components/category/category-sliders";
import Related from "@/components/homepage/Related";
import React, { use } from "react";
import posts from "@/utils/posts.json";
import { CategoryImageCard, CategoryListCard } from "@/components/Card";


function Category({ params }: { params: Promise<{lebel: string}> }) {
  const {lebel}  = use(params);

  console.log(decodeURIComponent(lebel));
  return (
    <main className="sm:mx-5 font-bangla bg-background text-foreground">
      <div className="flex flex-col lg:flex-row items-stretch ">
        <div className="flex flex-col flex-1  lg:w-[70%] p-2">
          <CategoryBack category={decodeURIComponent(lebel)} />
        </div>
        <div className="flex flex-col   lg:w-[30%] p-2">
          <Related varriant="row"/>
        </div>
      </div>

      {/* Category Articles Showcase Components */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        {posts?.data.map((item) => (
          <div
            key={item.id}
            className="w-full rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            {/* Mobile view - Horizontal layout */}
            <div className="flex md:hidden p-2 w-full">
              <CategoryListCard article={item} />
              
            </div>

            {/* Tablet and Desktop view - Card layout */}
            <div className="hidden md:block">
              <CategoryImageCard article={item} />
            </div>
          </div>
        ))}
      </div>
      <div>
        <CategorySliders />
      </div>
    </main>
  );
}

export default Category;
