import React from "react";
import { Card, CardContent } from "./components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";
import { MoveLeft, MoveRight } from "lucide-react";
import { useCarousel } from "./components/ui/use-carlousel";
import { Separator } from "./components/ui/separator";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      className={cn("bg-blacklight rounded-[40px]", className)}
      {...props}
    >
      <MoveLeft className="size-[30px] text-[#E8EAED]" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("bg-blacklight rounded-[40px]", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <MoveRight className="size-[30px] text-[#E8EAED]" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});

const items = [
  {
    title: "Accesibilidad",
    body: "Manejá tu dinero desde cualquier lugar a través de WhatsApp.",
    src: "/benefits/accessibility.png",
  },
  {
    title: "Independencia",
    body: "Tené un canal distinto al de los métodos tradicionales de pago.",
    src: "/benefits/independency.png",
  },
  {
    title: "Premios",
    body: "Obtené regalos especiales",
    src: "/benefits/awards.png",
  },
  {
    title: "Rapidez",
    body: "Enviá y recibí pisto al chilazo.",
    src: "/benefits/speed.png",
  },
  {
    title: "Inmediatez",
    body: "Recargá, pagá con QR y realizá transferencias de forma instantánea.",
    src: "/benefits/immediacy.png",
  },
  {
    title: "Seguridad",
    body: "Tus transacciones están protegidas y son fáciles de realizar.",
    src: "/benefits/security.png",
  },
  {
    title: "Gratis",
    body: "No tenés que pagar nada adicional.",
    src: "/benefits/free.png",
  },
  {
    title: "Simplicidad",
    body: "Usá ZIX sin complicaciones ni trámites.",
    src: "/benefits/simplicity.png",
  },
  {
    title: "Inclusión Financiera",
    body: "Creá un historial que te facilite acceder a productos bancarios en el futuro. ",
    src: "/benefits/financial.png",
  },
];

export default function Benefits() {
  return (
    <section className="bg-black sm:py-[100px] sm:px-[100px] px-5 py-10">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <div className="flex flex-col sm:flex-row gap-10 justify-between">
          <div className="font-bold text-[38px]/[120%] sm:text-[68px]/[120%]">
            <h2 className="text-green text-center sm:text-start">
              ¿Sos Usuario?
            </h2>
            <h2 className="text-white text-center sm:text-start">
              Mirá tus beneficios
            </h2>
          </div>
          <div className="self-center sm:self-end flex gap-2.5">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent className="mt-5 sm:mt-10">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-[315px] sm:basis-[500px]"
            >
              {
                <Card>
                  <CardContent className="flex  min-h-[293px] sm:min-h-[404px] flex-col gap-2.5 sm:gap-5 bg-blacklight rounded-[20px] sm:rounded-[40px] justify-center py-5 px-2.5 sm:py-2.5">
                    <div className="space-y-2.5 sm:mt-5 sm:mx-10 sm:space-y-5">
                      <h3 className="text-green text-center text-[30px]/[100%] sm:text-[40px]/[100%] font-bold">
                        {item.title}
                      </h3>
                      <p className="text-[18px]/[120%] text-center text-white font-normal sm:text-[20px]/[120%]">
                        {item.body}
                      </p>
                    </div>
                    <img src={item.src} className="mt-auto" />
                  </CardContent>
                </Card>
              }
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex flex-col gap-5 sm:gap-10 mt-5 sm:mt-10">
        <Separator className="bg-green" />
        <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-5">
          <div className="space-y-5">
            <h2 className="text-green font-bold text-[30px]/[100%] sm:text-[40px]/[100%]">
              Premios
            </h2>
            <p className="font-normal text-white text-[18px]/[120%] sm:text-[20px]/[120%]">
              Obtené recompensas por cada transacción, uso frecuente y
              descuentos en comercios.
            </p>
          </div>
          <ol className="text-white text-[18px]/[150%] sm:text-[20px]/[150%] list-disc pl-5">
            <li>Ganá hasta Q100 cada 15 días.</li>
            <li>Ganá hasta Q24 por transferencias.</li>
            <li>
              Obtené merchandising sin marca, vales de descuento en comedores,
              combos de snacks y bebidas.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
