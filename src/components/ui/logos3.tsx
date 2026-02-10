"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
    id: string;
    description: string;
    image?: string;
    text?: string;
    className?: string;
}

interface Logos3Props {
    heading?: string;
    logos?: Logo[];
    className?: string;
}

const Logos3 = ({
    logos = [],
}: Logos3Props) => {
    return (
        <section className="py-24">
            <div className="w-full flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-medium mb-12 text-primary">
                    Trusted by <span className="italic text-accent-olive">visionaries.</span>
                </h1>
            </div>
            <div className="pt-2">
                <div className="relative mx-auto flex items-center justify-center lg:max-w-7xl">
                    <Carousel
                        opts={{ loop: true }}
                        plugins={[AutoScroll({ playOnInit: true, speed: 1.2 })]}
                    >
                        <CarouselContent className="ml-0">
                            {logos.map((logo) => (
                                <CarouselItem
                                    key={logo.id}
                                    className="flex basis-auto min-w-fit justify-center pl-0"
                                >
                                    <div className="mx-6 sm:mx-8 md:mx-12 flex shrink-0 items-center justify-center">
                                        <div className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                                            {logo.image ? (
                                                <img
                                                    src={logo.image}
                                                    alt={logo.description}
                                                    className={logo.className}
                                                />
                                            ) : (
                                                <span className="text-base sm:text-xl md:text-2xl font-serif font-bold text-primary whitespace-nowrap">
                                                    {logo.text}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
                </div>
            </div>
        </section>
    );
};

export { Logos3 };
