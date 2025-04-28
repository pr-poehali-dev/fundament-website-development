import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Александр Петров",
    location: "Московская обл., г. Химки",
    text: "Заказывал строительство ленточного фундамента для дачного дома. Компания выполнила работы в срок и с высоким качеством. Особенно понравилась четкая организация процесса и чистота на участке после завершения.",
    rating: 5,
    date: "15.03.2025"
  },
  {
    id: 2,
    name: "Елена Сорокина",
    location: "Московская обл., д. Федоскино",
    text: "Обратились в компанию для строительства плитного фундамента под двухэтажный кирпичный дом. Бригада работала профессионально, все этапы контролировал инженер. Результатом очень довольны.",
    rating: 5,
    date: "02.02.2025"
  },
  {
    id: 3,
    name: "Михаил Воронцов",
    location: "г. Москва",
    text: "Выражаю благодарность компании за строительство свайно-ростверкового фундамента на сложном участке с высоким уровнем грунтовых вод. Работы выполнены качественно, все рекомендации инженера оказались полезными.",
    rating: 4,
    date: "28.01.2025"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-fundam-blue">Отзывы наших клиентов</h2>
            <p className="text-fundam-gray text-lg">
              Что говорят о нас клиенты, которые уже построили фундамент с нашей компанией
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-fundam-blue text-fundam-blue hover:bg-fundam-blue hover:text-white">
            <Link to="/reviews">
              Все отзывы
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-100 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${
                        index < testimonial.rating ? "text-fundam-yellow fill-fundam-yellow" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-fundam-gray mb-6 italic">"{testimonial.text}"</p>
                
                <div>
                  <p className="font-semibold text-fundam-blue">{testimonial.name}</p>
                  <div className="flex justify-between text-sm text-fundam-gray mt-1">
                    <span>{testimonial.location}</span>
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
