import { useContext } from "react";
import { AppContext } from "../ContextAPI/appContext";

const footerLink = [
  {
    title: "Services",
    sub1: "Delivery",
    sub2: "Pricing",
    sub3: "Fast food",
    sub4: "Reserve your spot",
  },
  {
    title: "Information",
    sub1: "Event",
    sub2: "Contact us",
    sub3: "Privacy policy",
    sub4: "Terms of services",
  },
  {
    title: "Address",
    sub1: "Lima - Peru",
    sub2: "Jr Union #999",
    sub3: "999 - 888 - 777",
    sub4: "tastyfood@email.com",
  },
];

export default function Footer() {
  const { darkmode } = useContext(AppContext);
  return (
    <div className="grid-container pt-36 pb-8" id="about">
      <main className="col-start-2 col-end-3 px-12">
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="">
            <h1 className="text-green text-xl font-semibold">Tasty Food</h1>
            <p className="mt-2 mb-5">Restaurant</p>
            <div className="flex mb-4">
              <div className="mr-4 cursor-pointer">
                <box-icon
                  name="facebook"
                  color={darkmode ? "white" : "black"}
                  type="logo"
                ></box-icon>
              </div>
              <div className="mr-4 cursor-pointer">
                <box-icon
                  name="instagram"
                  color={darkmode ? "white" : "black"}
                  type="logo"
                ></box-icon>
              </div>
              <div className="mr-4 cursor-pointer">
                <box-icon
                  name="twitter"
                  color={darkmode ? "white" : "black"}
                  type="logo"
                ></box-icon>
              </div>
            </div>
          </div>
          {footerLink.map(({ title, sub1, sub2, sub3, sub4 }, index) => (
            <div className="mb-4" key={index}>
              <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                {title}
              </h1>
              <p className="mb-2">
                <a href="#">{sub1}</a>
              </p>
              <p className="mb-2">
                <a href="#">{sub2}</a>
              </p>
              <p className="mb-2">
                <a href="#">{sub3}</a>
              </p>
              <p className="mb-2">
                <a href="#">{sub4}</a>
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-gray-500 text-sm">
          © 2020 Bedimcode. All right reserved
        </p>
      </main>
    </div>
  );
}
