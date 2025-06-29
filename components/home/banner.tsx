import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="lg:max-w-6xl mx-auto flex flex-col z-0 items-center justify-center py-32 sm:pt-40 transition-all animate-in bg-gradient-to-b from-white to-blue-50">
      <div className="text-center mb-8">
        <h1 className="py-6 text-5xl lg:text-6xl font-bold">
          Turn your words into{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            captivating
          </span>{" "}
          blog posts
        </h1>
        <h2 className="text-xl lg:text-2xl text-gray-600 px-4 lg:px-0 lg:max-w-4xl mx-auto mt-6">
          Convert your video or voice into a Blog Post in seconds with the power
          of AI! <span className="font-semibold text-blue-600">Built by Aditya</span>
        </h2>
      </div>

      <Button
        variant={"link"}
        className="mt-8 text-xl rounded-full px-12 py-8 lg:mt-12 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold shadow-xl hover:shadow-2xl hover:no-underline transform hover:scale-105 transition-all duration-300"
      >
        <Link href="/#pricing" className="flex gap-3 items-center">
          <span className="relative">Get VideoToBlog </span>
          <ArrowRight className="animate-pulse" />
        </Link>
      </Button>
    </section>
  );
}
