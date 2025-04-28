import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "lentochniy",
    title: "Ленточный фундамент",
    description: "Идеальное решение для легких и среднетяжелых домов на стабильных грунтах. Обеспечивает равномерное распределение нагрузки.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    features: ["Для домов до 2-х этажей", "Надежный и экономичный", "Срок строительства от 7 дней"],
    href: "/services/lentochniy-fundament"
  },
  {
    id: "plitniy",
    title: "Плитный фундамент",
    description: "Монолитная железобетонная плита, распределяющая нагрузку по всей площади. Лучший выбор для слабых и пучинистых грунтов.",
    image: "https://images.unsplash.com/photo-1621120711154-d1e2795ce86e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    features: ["Для тяжелых домов", "Устойчив к пучению", "Возможность обустройства подвала"],
    href: "/services/plitniy-fundament"
  },
  {
    id: "svayno-rostverkoviy",
    title: "Свайно-ростверковый фундамент",
    description: "Универсальное решение для сложных грунтов и участков с перепадами высот. Оптимальное сочетание прочности и цены.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    features: ["Для проблемных грунтов", "Быстрый монтаж", "Минимальные земляные работы"],
    href: "/services/svayno-rostverkoviy-fundament"
  }
];

const ServiceSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fundam-blue">Наши услуги</h2>
          <p className="text-fundam-gray text-lg max-w-2xl mx-auto">
            Мы специализируемся на строительстве трех основных типов фундаментов, 
            выбирая оптимальное решение в зависимости от условий участка и проекта дома
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="border border-gray-100 hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-w-3 aspect-h-2 relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-fundam-blue">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-fundam-yellow rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full border-fundam-blue text-fundam-blue hover:bg-fundam-blue hover:text-white">
                  <Link to={service.href}>
                    Узнать больше
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
