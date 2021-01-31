import { useContext } from "react";
import { DarkModeContext } from "../ContextAPI/darkMode";

export default function Header() {
  const nav = [
    {
      id: "home",
      name: "Home",
    },
    {
      id: "about",
      name: "About",
    },
    {
      id: "services",
      name: "Services",
    },
    {
      id: "menu",
      name: "Menu",
    },
    {
      id: "contact",
      name: "Contact Us",
    },
  ];

  const { darkmode, setDarkmode } = useContext(DarkModeContext);

  return (
    <header
      className={`max-w-screen-2xl border-b dark:border-gray-800 mx-4 sticky top-0 z-50`}
    >
      <div className="flex py-3 w-full md:py-7 max-w-screen-lg mx-auto justify-between  font-medium  bg-white dark:bg-DarkModegreen ">
        <div className="">
          <a href="#" className="hover:text-green ligther">
            Tasty
          </a>
        </div>
        <div className="flex  gap-10">
          {nav.map(({ id, name }) => (
            <nav key={id} className="text-base hidden md:block ">
              <a href={`#${id}`} className=" hover:text-green">
                {name}
              </a>
            </nav>
          ))}

          <div
            className="cursor-pointer"
            onClick={() => setDarkmode((prev) => !prev)}
          >
            {darkmode ? (
              <box-icon name="certification" color="white"></box-icon>
            ) : (
              <box-icon name="moon"></box-icon>
            )}
          </div>

          <div className="md:hidden">
            <box-icon
              name="menu"
              color="gray"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
