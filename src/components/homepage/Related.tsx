"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import posts from "@/utils/posts.json";
import { ListCard } from "../Card";

export default function Related({ varriant = "column" }: { varriant: string }) {

  

  const politicsArticles = posts.data
    .filter((post) => post.categories.some((cat) => cat.name === "রাজনীতি"))
    .slice(1, 7);
  const latestArticles = posts.data
    .filter((post) => post.categories.some((cat) => cat.name === "সর্বশেষ"))
    .slice(0, 7);
  const nationalArticles = posts.data.filter((post) =>
    post.categories.some((cat) => cat.name === "জাতীয়")
  );

  // Empty state component to maintain consistent height
  const EmptyState = () => (
    <div className="flex items-center justify-center h-64">
      <p className="text-gray-500 text-sm">কোন সংবাদ পাওয়া যায়নি</p>
    </div>
  );

  return (
    <div className={`w-full ${varriant === "row" ? "h-auto" : "h-screen"} flex flex-col border border-[#9D9595] rounded-xl p-2 shadow-sm font-bangla`}>
      {/* Tabs for categories - Sticky header */}
      <Tabs defaultValue="politics" className="w-full flex flex-col h-full">
        <div className={`${varriant === "row" ? "md:flex md:justify-between md:w-full md:px-5 md:items-center lg:flex-none lg:px-0" : ""} `}>
          <TabsList className={`grid w-full grid-cols-3 bg-[#FED6D6] h-auto p-1 rounded-t-lg ${varriant === "row" ? "md:w-[50%] lg:w-full" : " w-full"}`}>
            <TabsTrigger
              value="politics"
              className="relative px-2 py-2 text-sm font-bold rounded-lg hover:cursor-pointer
              data-[state=active]:bg-white
              data-[state=active]:text-red-500
              data-[state=inactive]:#FED6D6
              data-[state=inactive]:text-black
              border-0
              data-[state=active]:after:content-['']
              data-[state=active]:after:absolute
              data-[state=active]:after:-bottom-2
              data-[state=active]:after:left-3
              data-[state=active]:after:right-0
              data-[state=active]:after:h-1
              data-[state=active]:after:w-3/4
              data-[state=active]:after:rounded-full
              data-[state=active]:after:bg-red-500"
            >
              রাজনীতি
            </TabsTrigger>
            <TabsTrigger
              value="latest"
              className="relative px-2 py-2 text-sm font-bold rounded-lg hover:cursor-pointer
              data-[state=active]:bg-white
              data-[state=active]:text-red-500
              data-[state=inactive]:#FED6D6
              data-[state=inactive]:text-black
              border-0
              data-[state=active]:after:content-['']
              data-[state=active]:after:absolute
              data-[state=active]:after:-bottom-2
              data-[state=active]:after:left-3
              data-[state=active]:after:right-0
              data-[state=active]:after:h-1
              data-[state=active]:after:w-3/4
              data-[state=active]:after:rounded-full
              data-[state=active]:after:bg-red-500"
            >
              সর্বশেষ
            </TabsTrigger>
            <TabsTrigger
              value="national"
              className="relative px-2 py-2 text-sm font-bold rounded-lg hover:cursor-pointer
              data-[state=active]:bg-white
              data-[state=active]:text-red-500
              data-[state=inactive]:#FED6D6
              data-[state=inactive]:black
              border-0
              data-[state=active]:after:content-['']
              data-[state=active]:after:absolute
              data-[state=active]:after:-bottom-2
              data-[state=active]:after:left-3
              data-[state=active]:after:right-0
              data-[state=active]:after:h-1
              data-[state=active]:after:w-3/4
              data-[state=active]:after:rounded-full
              data-[state=active]:after:bg-red-500"
            >
              জাতীয়
            </TabsTrigger>
          </TabsList>
          <div className={`${varriant === "row" ? "text-[#FF0000] text-lg hover:text-red-600 text-end md:block md:w-[50%] hidden lg:hidden" : "hidden"} `}>
            <p>আরো দেখুন</p>
          </div>
        </div>

        {/* Scrollable content area - Flex-grow to fill available space */}
        <div className="flex-grow overflow-hidden">
          <TabsContent value="politics" className="h-full overflow-y-auto">
            <div className={`min-h-[200px] grid  ${varriant === "row" ? "md:grid-cols-2 lg:grid-cols-1" : " grid-cols-1"}`}>
              {politicsArticles.length > 0 ? (
                politicsArticles.map((article, index) => (
                  <ListCard key={`politics-${index}`} article={article} />
                ))
              ) : (
                <EmptyState />
              )}
            </div>
          </TabsContent>

          <TabsContent value="latest" className="h-full overflow-y-auto">
            <div className="min-h-[200px]">
              {latestArticles.length > 0 ? (
                latestArticles.map((article, index) => (
                  <ListCard key={`latest-${index}`} article={article} />
                ))
              ) : (
                <EmptyState />
              )}
            </div>
          </TabsContent>

          <TabsContent value="national" className="h-full overflow-y-auto">
            <div className="min-h-[200px]">
              {nationalArticles.length > 0 ? (
                nationalArticles.map((article, index) => (
                  <ListCard key={`national-${index}`} article={article} />
                ))
              ) : (
                <EmptyState />
              )}
            </div>
          </TabsContent>
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="flex-shrink-0 p-2">
          <div className="text-center py-2 bg-[#CC142B17] rounded-lg">
            <p className="text-[#FF0000] font-medium cursor-pointer hover:underline">
              আরও সব খবর
            </p>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
