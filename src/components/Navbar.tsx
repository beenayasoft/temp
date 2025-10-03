import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [language, setLanguage] = useState("EN");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-foreground">
            JBUJB
          </div>
          <div className="hidden md:flex items-center space-x-1 bg-secondary/30 rounded-full px-6 py-2">
            <a href="#features" className="px-4 py-2 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              Features
            </a>
            <a href="#how-it-works" className="px-4 py-2 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              How It Works
            </a>
            <a href="#about" className="px-4 py-2 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              About
            </a>
            <div className="relative flex items-center">
              <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-9 w-48 h-9 bg-background/50 border-0 rounded-full text-sm focus-visible:ring-1"
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background">
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

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Register as Merchant
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
