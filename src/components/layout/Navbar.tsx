import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { Menu, Rocket, Globe, Radio, Zap, Map, Route, Factory, Tractor } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  function handleRedirect() {
    window.location.href = "https://form.jotform.com/251402056920447"; // Correct URL
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Solutions", path: "/solutions" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-senseLive-spaceBlack/90 backdrop-blur-md border-b border-senseLive-teal/20">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo and brand - removed the Satellite icon */}
        <Link to="/" className="flex items-center gap-2 relative group">
          <div className="absolute -inset-2 bg-senseLive-teal/10 rounded-full scale-0 group-hover:scale-100 transition-all duration-300"></div>
          <div className="relative">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-senseLive-teal via-senseLive-purple to-senseLive-orange">
              Dhruvant
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-senseLive-teal to-senseLive-purple group-hover:w-full transition-all duration-300"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium ${location.pathname === link.path ? 'text-senseLive-teal' : 'text-gray-300 hover:text-senseLive-teal'} transition-colors relative group`}
            >
              <span>{link.name}</span>
              <div className={`absolute -bottom-1 left-0 h-px bg-senseLive-teal transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
            </Link>
          ))}

          <Button
            className="bg-senseLive-teal hover:bg-senseLive-darkTeal flex items-center gap-2 relative overflow-hidden group"
            onClick={handleRedirect} // Use handleRedirect instead of inline redirect
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <Rocket className="h-4 w-4 group-hover:animate-pulse" />
            <span>Get Started</span>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-senseLive-teal">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[260px] sm:w-[300px] bg-senseLive-spaceBlack border-l border-senseLive-teal/20 dark:bg-black/80">
            <div className="flex items-center justify-between mt-2">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-senseLive-teal to-senseLive-purple">
                Dhruvant
              </span>
            </div>
            <nav className="flex flex-col gap-6 mt-10">
              {/* Space tech design elements */}
              <div className="absolute top-20 right-6 w-2 h-2 rounded-full bg-senseLive-teal glow-dot"></div>
              <div className="absolute top-32 right-12 w-1 h-1 rounded-full bg-senseLive-orange glow-dot"></div>
              <div className="absolute bottom-20 left-6 w-2 h-2 rounded-full bg-senseLive-purple glow-dot"></div>

              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`text-base font-medium ${location.pathname === link.path ? 'text-senseLive-teal' : 'text-gray-300 hover:text-senseLive-teal dark:text-gray-200'} transition-colors flex items-center gap-2`}
                >
                  {index === 0 && <Globe className="h-4 w-4 text-senseLive-teal" />}
                  {index === 1 && <Radio className="h-4 w-4 text-senseLive-teal" />}
                  {index === 2 && <Zap className="h-4 w-4 text-senseLive-teal" />}
                  {index === 3 && <Globe className="h-4 w-4 text-senseLive-teal" />}
                  {index === 4 && <Radio className="h-4 w-4 text-senseLive-teal" />}
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="h-px w-full bg-gradient-to-r from-senseLive-teal/50 to-transparent my-2"></div>
             <Button
  className="bg-senseLive-teal text-white hover:bg-senseLive-teal mt-2 flex items-center gap-2"
  onClick={handleRedirect}
>
  <Rocket className="h-4 w-4 text-white" />
  <span className="text-white">Get Started</span>
</Button>

            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;