import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Ленточный фундамент",
    href: "/services/lentochniy-fundament",
    description: "Надежное основание для легких и среднетяжелых зданий",
  },
  {
    title: "Плитный фундамент",
    href: "/services/plitniy-fundament",
    description: "Монолитное основание для домов на проблемных почвах",
  },
  {
    title: "Свайно-ростверковый фундамент",
    href: "/services/svayno-rostverkoviy-fundament",
    description: "Оптимальное решение для сложных грунтов и рельефов",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-fundam-blue">
          Фундам.ПРО
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-fundam-blue hover:bg-fundam-lightGray">
                  Услуги
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-fundam-lightGray hover:text-fundam-blue focus:bg-fundam-lightGray"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/portfolio" className={cn("text-fundam-blue hover:text-fundam-darkBlue", "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50")}>
                  Портфолио
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/reviews" className={cn("text-fundam-blue hover:text-fundam-darkBlue", "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50")}>
                  Отзывы
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={cn("text-fundam-blue hover:text-fundam-darkBlue", "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50")}>
                  О компании
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/blog" className={cn("text-fundam-blue hover:text-fundam-darkBlue", "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50")}>
                  Блог
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contacts" className={cn("text-fundam-blue hover:text-fundam-darkBlue", "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50")}>
                  Контакты
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3">
            <div className="text-right hidden lg:block">
              <p className="text-fundam-blue font-medium">+7 (495) 123-45-67</p>
              <p className="text-fundam-gray text-sm">Пн-Вс: 9:00-20:00</p>
            </div>
            <Button className="bg-fundam-yellow hover:bg-amber-500 text-black">
              <Phone className="h-4 w-4 mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-fundam-blue"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-6 bg-white border-t border-gray-100">
          <nav className="flex flex-col space-y-4">
            <div className="text-fundam-blue font-medium">Услуги:</div>
            {services.map((service) => (
              <Link 
                key={service.title}
                to={service.href}
                className="text-fundam-gray hover:text-fundam-blue pl-4 border-l-2 border-fundam-lightGray"
                onClick={() => setIsMenuOpen(false)}
              >
                {service.title}
              </Link>
            ))}
            <Link to="/portfolio" className="text-fundam-blue hover:text-fundam-darkBlue" onClick={() => setIsMenuOpen(false)}>
              Портфолио
            </Link>
            <Link to="/reviews" className="text-fundam-blue hover:text-fundam-darkBlue" onClick={() => setIsMenuOpen(false)}>
              Отзывы
            </Link>
            <Link to="/about" className="text-fundam-blue hover:text-fundam-darkBlue" onClick={() => setIsMenuOpen(false)}>
              О компании
            </Link>
            <Link to="/blog" className="text-fundam-blue hover:text-fundam-darkBlue" onClick={() => setIsMenuOpen(false)}>
              Блог
            </Link>
            <Link to="/contacts" className="text-fundam-blue hover:text-fundam-darkBlue" onClick={() => setIsMenuOpen(false)}>
              Контакты
            </Link>
            <div className="pt-2">
              <p className="text-fundam-blue font-medium">+7 (495) 123-45-67</p>
              <p className="text-fundam-gray text-sm">Пн-Вс: 9:00-20:00</p>
            </div>
            <Button className="bg-fundam-yellow hover:bg-amber-500 text-black w-full">
              <Phone className="h-4 w-4 mr-2" />
              Заказать звонок
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
