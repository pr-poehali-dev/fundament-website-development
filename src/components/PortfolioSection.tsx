import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ленточный фундамент для дома из газобетона",
    location: "Одинцовский р-н, КП 'Лесной'",
    image: "https://images.unsplash.com/photo-1574001412234-6017ce25b5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Плитный фундамент для кирпичного дома",
    location: "Солнечногорский р-н, д. Брехово",
    image: "https://images.unsplash.com/photo-1608022747744-d9a224136ec3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Свайно-ростверковый фундамент с цокольным этажом",
    location: "Ступинский р-н, КП 'Аквамарин'",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-16 bg-fundam-lightGray">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-fundam-blue">Выполненные проекты</h2>
            <p className="text-fundam-gray text-lg">
              Ознакомьтесь с нашими недавними работами по строительству фундаментов
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-fundam-blue text-fundam-blue hover:bg-fundam-blue hover:text-white">
            <Link to="/portfolio">
              Все проекты
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition-all">
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-fundam-blue">{project.title}</h3>
                <p className="text-fundam-gray mb-4">{project.location}</p>
                <Link to={`/portfolio/${project.id}`} className="text-fundam-blue hover:text-fundam-yellow inline-flex items-center font-medium">
                  Подробнее
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
