import { DarkModeContext } from "../ContextAPI/darkMode";
import Image from "next/image";
import { useContext } from "react";
const menu = [
  {
    image: "/images/plate1.png",
    name: "Barbecue salad",
    text: "Delicious dish",
    price: "22.00",
  },
  {
    image: "/images/plate2.png",
    name: "Salad with fish",
    text: "Delicious dish",
    price: "12.00",
  },
  {
    image: "/images/plate3.png",
    name: "Spinach salad",
    text: "Delicious dish",
    price: "9.50",
  },
];

export default function Menu() {
  return (
    <div className="grid-container pt-36 pb-8" id="menu">
      <main className="col-start-2 col-end-3 text-center">
        <h2 className="text-green text-lg font-semibold mb-8 ">Offering</h2>
        <h1 className="font-bold text-gray-800 dark:text-white text-2xl md:text-4xl md:font-semibold mb-8 ">
          Our amazing services
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap px-20">
          {menu.map(({ name, image, text, price }) => (
            <div
              className="p-8 m-8 text-left  max-w-md md:mx-auto border dark:border-gray-800 rounded-xl shadow-sm relative"
              key={name}
            >
              <div className="text-green mb-2">
                <Image src={image} width={130} height={130} alt={name} />
              </div>
              <h2 className="font-bold text-gray-800 dark:text-white text-xl md:font-semibold my-2 ">
                {name}
              </h2>
              <p className="mb-2">{text}</p>
              <p className="font-semibold dark:text-white    ">${price}</p>
              <button className="bottom-0 right-0 absolute p-3 bg-green rounded-tl-xl rounded-br-xl hover:bg-dark-green" ><box-icon name='cart-alt' color="white" ></box-icon></button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
