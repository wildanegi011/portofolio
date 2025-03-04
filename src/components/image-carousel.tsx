"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Images = {
  id: number;
  url: string;
  title: string;
};

interface ImageCarouselProps {
  images: Images[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <div className="w-full overflow-hidden">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="w-full">
          {images?.map((image, index) => (
            <CarouselItem key={index} className="w-full">
              <Card className="w-full bg-black border-none rounded-lg">
                <CardContent className="p-0 flex items-center justify-center w-full">
                  <div className="relative w-full max-w-full h-[300px] md:h-[500px]">
                    <Image
                      src={image.url}
                      alt={image.title}
                      width={800}
                      height={500}
                      className="rounded-lg w-full h-auto object-contain"
                      quality={100}
                      unoptimized
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-black border-neutral-700 mx-16" />
        <CarouselNext className="bg-black border-neutral-700 mx-20" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
