import CategoryBack from "@/components/category/category-back";
import CategoryLine from "@/components/category/category-line";
import Hero from "@/components/homepage/Hero";
import Related from "@/components/homepage/Related";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="w-full mx-auto">
        <div className="flex flex-col sm:flex-row sm:px-5 border-b-2 mb-2 items-stretch overflow-hidden">
          {/* Main content */}
          <section className="flex flex-col flex-1 sm:w-[60%] lg:w-[70%] p-2 space-y-5">
            <Hero />
            <CategoryLine />
            <CategoryBack category="সর্বশেষ"/>
          </section>
          {/* Side content */}
          <section className="flex flex-col sm:w-[40%] lg:w-[30%] p-2">
            <Related varriant="column"/>
          </section>
        </div>
      </main>
    </div>
  );
}
