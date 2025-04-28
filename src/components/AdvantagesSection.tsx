import { Clock, Award, Shield, Tool, Truck, CreditCard } from "lucide-react";

const advantages = [
  {
    icon: <Award className="h-10 w-10 text-fundam-yellow" />,
    title: "15+ лет опыта",
    description: "Мы специализируемся на строительстве фундаментов с 2010 года и накопили богатый опыт"
  },
  {
    icon: <Clock className="h-10 w-10 text-fundam-yellow" />,
    title: "Соблюдение сроков",
    description: "Все работы выполняются строго в соответствии с согласованным графиком"
  },
  {
    icon: <Shield className="h-10 w-10 text-fundam-yellow" />,
    title: "Гарантия 10 лет",
    description: "Предоставляем долгосрочную гарантию на все виды выполненных работ"
  },
  {
    icon: <Tool className="h-10 w-10 text-fundam-yellow" />,
    title: "Современное оборудование",
    description: "Используем профессиональную технику и качественные материалы"
  },
  {
    icon: <Truck className="h-10 w-10 text-fundam-yellow" />,
    title: "Собственная техника",
    description: "Имеем собственный парк строительной техники для всех видов работ"
  },
  {
    icon: <CreditCard className="h-10 w-10 text-fundam-yellow" />,
    title: "Поэтапная оплата",
    description: "Удобная система оплаты по этапам выполнения работ без предоплаты"
  }
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 bg-fundam-lightGray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fundam-blue">Наши преимущества</h2>
          <p className="text-fundam-gray text-lg max-w-2xl mx-auto">
            Почему клиенты выбирают именно нашу компанию для строительства фундамента
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-fundam-blue">{advantage.title}</h3>
              <p className="text-fundam-gray">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
