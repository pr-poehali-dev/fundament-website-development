import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-fundam-blue text-white py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Надёжный фундамент — <span className="text-fundam-yellow">основа</span> вашего дома
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Профессиональное строительство фундаментов любой сложности с гарантией качества до 10 лет
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-fundam-yellow hover:bg-amber-500 text-black font-medium">
                <Link to="/calculate">
                  Рассчитать стоимость
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/portfolio">
                  Смотреть портфолио
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-fundam-yellow">15+</div>
                <div className="text-sm text-gray-300">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fundam-yellow">250+</div>
                <div className="text-sm text-gray-300">завершенных проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fundam-yellow">10</div>
                <div className="text-sm text-gray-300">лет гарантии</div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1585544314038-a0d3769d0193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Строительство фундамента" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg w-64">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-fundam-blue font-medium">Работаем сейчас</div>
              </div>
              <div className="text-fundam-gray text-sm">
                Оставьте заявку и получите бесплатную консультацию инженера
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
