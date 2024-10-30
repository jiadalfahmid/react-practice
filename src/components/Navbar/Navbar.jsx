const Navbar = () => {
   const navbarRoutes = [
      { id: 1, path: "/", name: "Home" },
      { id: 2, path: "/about", name: "About" },
      { id: 3, path: "/services", name: "Services" },
      { id: 4, path: "/projects", name: "Projects" },
      { id: 5, path: "/contact", name: "Contact" }
    ];
   return (
      <ul className="flex gap-4 font-semibold text-lg">
         {
            navbarRoutes.map((link)=><li className="" key={link.id}><a href={link.path}>{link.name}</a></li> )
         }
      </ul>
   );
};

export default Navbar;