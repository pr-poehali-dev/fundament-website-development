import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать не менее 2 символов",
  }),
  phone: z.string().min(10, {
    message: "Введите корректный номер телефона",
  }),
  service: z.string().min(1, {
    message: "Выберите услугу",
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Заявка отправлена",
      description: `Спасибо, ${values.name}! Мы свяжемся с вами в ближайшее время.`,
    });
    form.reset();
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fundam-blue">
                Получите бесплатную консультацию
              </h2>
              <p className="text-fundam-gray text-lg">
                Оставьте заявку и наш инженер свяжется с вами для консультации по вашему проекту
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ваше имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Введите ваше имя" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Телефон</FormLabel>
                      <FormControl>
                        <Input placeholder="+7 (___) ___-__-__" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Интересующая услуга</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="lentochniy">Ленточный фундамент</SelectItem>
                          <SelectItem value="plitniy">Плитный фундамент</SelectItem>
                          <SelectItem value="svayno-rostverkoviy">Свайно-ростверковый фундамент</SelectItem>
                          <SelectItem value="consultation">Только консультация</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-fundam-yellow hover:bg-amber-500 text-black">
                  <Phone className="h-4 w-4 mr-2" />
                  Заказать звонок
                </Button>
                
                <p className="text-xs text-fundam-gray text-center">
                  Нажимая на кнопку, вы даете согласие на обработку персональных данных
                </p>
              </form>
            </Form>
          </div>

          <div className="hidden md:block rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Консультация инженера" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
