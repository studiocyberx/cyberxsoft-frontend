"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import FeatureCard from "@/app/_components/FeatureCard"
import AnimatedCards from "@/components/AnimatedCards"
import type { CarouselApi } from "@/components/ui/carousel"

interface ImageProps {
  id: number
  url: string
  alternativeText: string
}

interface FeatureCarouselProps {
  data: {
    id: number
    heading: string
    subHeading: string
    image: ImageProps
  }[]
}

export function FeatureCarousel({ data }: Readonly<FeatureCarouselProps>) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    // Update count when API is ready
    setCount(api.scrollSnapList().length)

    // Setup a handler for slide changes
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    // Cleanup
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  // Auto-rotation with infinite loop
  useEffect(() => {
    if (!api || !count) return

    const autoRotationInterval = setInterval(() => {
      // If we're at the last slide, we don't need to worry about
      // manually resetting to the first slide because loop: true
      // handles this automatically
      api.scrollNext()
    },10000)

    return () => clearInterval(autoRotationInterval)
  }, [api, count])

  return (
    <div className="pt-12 max-w-[1400px] mx-auto px-4 sm:px-5 md:px-10">
      <AnimatedCards>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="-ml-4">
            {data.map((feature) => (
              <CarouselItem key={feature.id} className="pl-4 md:basis-1/2 lg:basis-1/4 pt-16">
                <FeatureCard feature={feature} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative static transform-none bg-custom-purple-500 hover:bg-custom-purple-400 border-none text-white" />
            <CarouselNext className="relative static transform-none bg-custom-purple-500 hover:bg-custom-purple-400 border-none text-white" />
          </div>
        </Carousel>
      </AnimatedCards>
    </div>
  )
}
