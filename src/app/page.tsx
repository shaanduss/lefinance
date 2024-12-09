import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className = "container mx-auto mt-5">
      <div className="before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img src="/stock-1863880_1920.jpg" className="absolute inset-0 max-h-[500px] w-full h-full object-cover"/>
        <div className="min-h-[400px] relative z-50 h-full w-full mx-auto flex flex-col justify-center text-white p-6">
          <h2 className="text-7xl font-bold text-accent-title">LeFinance</h2>
          <p className="text-lg mt-2 text-stone-300 suse">Africa's #1 Financial Trading Platform</p>
          <div className="flex flex-col mt-8 gap-2 px-10 text-2xl">
            <p className="font-bold">Low Trading Fees</p>
            <p className="font-bold">High Quality Selection of Stocks</p>
            <p className="font-bold">Expert Financial Advisors</p>
            <div className="flex items-center align-center w-full">
              <Button className="mt-4 w-[100px] bg-accent text-accent-foreground hover:bg-accent-hover" size="lg"> <UserPlus/> Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}