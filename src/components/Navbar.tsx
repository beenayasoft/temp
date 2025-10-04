import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [language, setLanguage] = useState("EN");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3EE]/95 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-gray-900">
            JBUJB
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              How It Works
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              About
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 text-gray-700 hover:text-gray-900">
                  <Globe className="w-4 h-4" />
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuItem onClick={() => setLanguage("EN")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("FR")}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("AR")}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-[#2C5446] text-white hover:bg-[#234437] rounded-full px-6 hidden md:inline-flex">
              Register as Merchant
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
