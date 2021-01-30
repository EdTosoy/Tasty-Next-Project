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

  return (
    <header className="border-b mx-4 sticky top-0 z-10">
      <div className="flex py-3  md:py-7 max-w-screen-lg mx-auto justify-between  font-medium  bg-white ">
        <div className="">
          <a href="#" className="hover:text-green ligther">
            Tasty
          </a>
        </div>
        <div className="flex  gap-10">
          {nav.map(({ id, name }) => (
            <nav className="text-base hidden md:block ">
              <a href={`#${id}`} className=" hover:text-green">
                {name}
              </a>
            </nav>
          ))}
          <div className="md:hidden">
            <box-icon name="menu" color="gray" onClick={()=> console.log("fire")} />
          </div>
        </div>
      </div>
    </header>
  );
}
