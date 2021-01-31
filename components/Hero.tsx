import { HeapProfiler } from "inspector";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="place-content-center relative containerer px-4 sm:h-80" id="home">
      <div className="flex justify-between col-start-4 flex-col sm:flex-row">
        <div className="self-center py-5 md:pr-4 max-w-sm">
          <h1 className="text-green  font-semibold text-4xl md:text-6xl  mb-10">
            Tasty food
          </h1>
          <h2 className="text-gray-800 dark:text-white text-3xl font-semibold md:text-4xl mb-10">
            Try the best food of the week.
          </h2>
          <button className="p-3 rounded-md bg-green text-white hover:bg-dark-green">
            View Menu
          </button>
        </div>
        <div className="">
          <Image src="/images/home.png" width={488} height={488} alt="hero" />
        </div>
      </div>
    </main>
  );
}
