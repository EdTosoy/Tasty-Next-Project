export default function Contact() {
  return (
    <div className="grid-container pt-36 pb-8" id="contact">
      <main className="col-start-2 col-end-3  px-8">
        <div className="flex justify-between flex-col md:flex-row items-center ml-4 ">
          <div className="text-center  md:text-left max-w-lg">
            <h2 className="text-green text-lg font-semibold mb-8 ">
              Let's talk
            </h2>
            <h1 className="font-bold text-grdark:text-whiteay-800 dark:text-white text-2xl md:text-4xl md:font-semibold mb-8 ">
              Contact us
            </h1>
            <p className="font-medium mb-8  ">
              If you want to reserve a table in our restaurant, contact us and
              we will attend you quickly, with our 24/7 chat service.
            </p>
          </div>
          <div className="">
            <button className="bg-green text-white py-3 px-4 rounded-md  mb-8 hover:bg-dark-green text-right">
              Contact us now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
