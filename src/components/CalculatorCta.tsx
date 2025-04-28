import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalculatorIcon, ArrowRight } from "lucide-react";

const CalculatorCta = () => {
  return (
    <section className="py-16 bg-fundam-darkBlue text-white">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-fundam-blue to-fundam-darkBlue p-8 md:p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Рассчитайте стоимость фундамента онлайн
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Воспользуйтесь нашим калькулятором для предварительного расчета стоимости строительства фундамента для вашего дома
              </p>
              <ul className="grid grid-cols-2 gap-4 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-fundam-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span>Выберите тип фундамента</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-fundam-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span>Укажите размеры дома</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-fundam-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span>Выберите материал стен</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-fundam-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span>Получите расчет за 1 минуту</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-fundam-yellow hover:bg-amber-500 text-black font-medium">
                <Link to="/calculate">
                  <CalculatorIcon className="h-5 w-5 mr-2" />
                  Рассчитать стоимость фундамента
                </Link>
              </Button>
            </div>
            
            <div className="hidden md:flex justify-center">
              <div className="bg-white/10 p-8 rounded-lg w-full max-w-xs backdrop-blur-sm">
                <div className="text-center mb-6">
                  <CalculatorIcon className="h-12 w-12 mx-auto text-fundam-yellow" />
                  <h3 className="text-xl font-semibold mt-2">Онлайн калькулятор</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded p-3 text-sm">
                    <div className="font-medium">Вид фундамента:</div>
                    <div className="text-fundam-yellow">Ленточный</div>
                  </div>
                  <div className="bg-white/10 rounded p-3 text-sm">
                    <div className="font-medium">Площадь дома:</div>
                    <div className="text-fundam-yellow">120 м²</div>
                  </div>
                  <div className="bg-white/10 rounded p-3 text-sm">
                    <div className="font-medium">Стоимость:</div>
                    <div className="text-fundam-yellow text-xl font-bold">от 385 000 ₽</div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link to="/calculate" className="inline-flex items-center text-fundam-yellow hover:underline font-medium">
                    Точный расчет
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorCta;
