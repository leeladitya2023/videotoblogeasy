import { ArrowRight, CheckIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { plansMap } from "@/lib/constants";

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white" id="pricing">
      <div className="py-16 lg:py-24 max-w-6xl mx-auto px-8 lg:px-0">
        <div className="flex items-center justify-center w-full pb-12">
          <h2 className="font-bold text-2xl uppercase mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Pricing Plans
          </h2>
        </div>
        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {plansMap.map(
            ({ name, price, description, items, id, paymentLink }, idx) => (
              <div className="relative w-full max-w-lg" key={idx}>
                <div
                  className={cn(
                    "relative flex flex-col h-full gap-6 lg:gap-8 z-10 p-8 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300",
                    id === "pro" && "border-blue-500 border-2 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50"
                  )}
                >
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <p className="text-xl lg:text-2xl font-bold capitalize text-gray-900">
                        {name}
                      </p>
                      <p className="text-gray-600 mt-2">{description}</p>
                    </div>
                    {id === "pro" && (
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <p className="text-5xl tracking-tight font-extrabold text-gray-900">
                      ${price}
                    </p>
                    <div className="flex flex-col justify-end mb-[4px]">
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        USD
                      </p>
                      <p className="text-xs text-gray-500">/month</p>
                    </div>
                  </div>
                  <ul className="space-y-3 leading-relaxed text-base flex-1">
                    {items.map((item, idx) => (
                      <li className="flex items-center gap-3" key={idx}>
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                          <CheckIcon size={12} className="text-white" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    <Button
                      variant={"link"}
                      className={cn(
                        "w-full border-2 rounded-xl flex gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg",
                        id === "pro" && "shadow-lg"
                      )}
                    >
                      <Link
                        href={paymentLink}
                        className="flex gap-2 items-center w-full justify-center"
                      >
                        Get VideoToBlog <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
