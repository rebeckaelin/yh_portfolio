import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <nav className="bg-primary text-light h-18 flex justify-between items-center">
      {/* Ditt namn - endast synligt på mobilversionen */}
      <h1 className="text-2xl font-yeseva pl-5 block md:hidden">
        Rebecka Larsson.
      </h1>

      {/* Desktop och Mobile Navbar */}
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
