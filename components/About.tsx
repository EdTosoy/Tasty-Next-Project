import Image from "next/image";
export default function About() {
  return (
    <div className="grid-container pt-40 pb-8">
      <main className="flex flex-col md:flex-row-reverse m-4 col-start-2 col-end-3">
        <div className=" md:mr-auto  md:text-left  md:w-1/2 flex items-center ml-4 md:max-w-sm">
          <div className="text-center">
            <h2 className="text-green text-lg font-semibold mb-8 ">
              About Us
            </h2>
            <h1 className="font-bold text-gray-800 text-2xl md:text-4xl md:font-semibold mb-8 ">
              We cook the best tasty food
            </h1>
            <p className="font-medium mb-8  ">
              We cook the best food in the entire city, with excellent customer
              service, the best meals and at the best price, visit us.
            </p>
            <button className="bg-green text-white py-3 px-4 rounded-md  mb-8 hover:bg-dark-green text-right">
              Explore history
            </button>
          </div>
        </div>
        <div className="md:mr-auto mx-10 grid place-content-center w-5/6 md:w-2/5 h-96 relative"
        >
          <Image
            src="/images/about.jpg"
            className="rounded-xl"
            layout="fill"
          />
        </div>
      </main>
    </div>
  );
}
