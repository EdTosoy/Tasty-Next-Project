import Image from "next/image";

const services = [
  {
    icon: "/images/dish.svg",
    name: "Exelent food",
    text:
      "We offer our clients excellent quality services for many years, with the best and delicious food in the city.",
  },
  {
    icon: "/images/pizza.svg",
    name: "Fast food",
    text:
      "We offer our clients excellent quality services for many years, with the best and delicious food in the city.",
  },
  {
    icon: "/images/truck.svg",
    name: "Delivery",
    text:
      "We offer our clients excellent quality services for many years, with the best and delicious food in the city.",
  },
];

export default function Services() {
  return (
    <div className="grid-container pt-36 pb-8" id="services">
      <main className="col-start-2 col-end-3 text-center">
        <h2 className="text-green text-lg font-semibold mb-8 ">Offering</h2>
        <h1 className="font-bold text-gray-800 dark:text-white text-2xl md:text-4xl md:font-semibold mb-8 ">
          Our amazing services
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap ">
          {services.map(({ name, icon, text }) => (
            <div className="p-8 max-w-md mx-auto " key={name}>
              <div className="text-green mb-2">
                <Image src={icon} width={64} height={64} alt={name} />
              </div>
              <h2 className="font-bold text-gray-800 dark:text-white text-2xl md:text-xl md:font-semibold my-2 ">
                {name}
              </h2>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
