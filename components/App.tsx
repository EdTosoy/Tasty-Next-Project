import Image from "next/image";
export default function App() {
  return (
    <div className="grid-container pt-36 pb-8" id="about">
      <main className="flex flex-col md:flex-row-reverse m-4 col-start-2 col-end-3">
        <div className="md:mr-auto   md:w-1/2 flex items-center ml-4 md:max-w-sm">
          <div className="text-center  md:text-left">
            <h2 className="text-green text-lg font-semibold mb-8 ">App</h2>
            <h1 className="font-bold text-gray-800 
            dark:text-white text-2xl md:text-4xl md:font-semibold mb-8 ">
              App is aviable
            </h1>
            <p className="font-medium mb-8  ">
              Find our application and download it, you can make reservations,
              food orders, see your deliveries on the way and much more.
            </p>
            <button className="my-3 mr-3">
              <Image src="/images/app1.png" width={150} height={40} />
            </button>
            <button className="my-3 mr-3">
              <Image src="/images/app2.png" width={150} height={40} />
            </button>
          </div>
        </div>
        <div className="md:mr-auto mx-10 grid place-content-center w-5/6 md:w-2/5 h-550px relative">
            <Image src="/images/movil-app.png" layout="fill" />
        </div>
      </main>
    </div>
  );
}
