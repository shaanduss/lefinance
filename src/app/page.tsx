import Image from "next/image";

export default function Home() {
  return (
    <div className = "container mx-auto mt-5">
      <div className="before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img src="/stock-1863880_1920.jpg" className="absolute inset-0 max-h-[500px] w-full h-full object-cover"/>
        <div className="min-h-[350px] relative z-50 h-full w-full mx-auto flex flex-col justify-center text-white p-6">
          <h2 className="text-6xl font-bold">Le Finance</h2>
          <p className="text-md mt-2 text-stone-400 suse">Africa's #1 Financial Trading Platform</p>

          <p className="text- mt-5">Sign up now to enjoy the lowest trading fees in the Indian Ocean!</p>
        </div>
      </div>
    </div>
  );
}