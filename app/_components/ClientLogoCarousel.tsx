"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import type { CarouselApi } from "@/components/ui/carousel"

// Sample logo data - replace with your actual client logos
const clientLogos = [
  {
    id: 1,
    name: "Client 1",
    logo: "/Asset 2@4x.png",
  },
  {
    id: 2,
    name: "Client 2",
    logo: "/Asset 3@4x.png",
  },
    {
    id: 3,
    name: "Client 3",
    logo: "/Asset 4@4x.png",
  },
    {
        id: 4,
        name: "Client 4",
        logo: "/Asset 5@4x.png",
      },
    {
        id: 5,
        name: "Client 5",
        logo: "/Asset 6@4x.png",
    },

    {
        id: 7,
        name: "Client 7",
        logo: "/Asset 8@4x.png",
    },
    {
        id: 8,
        name: "Client 8",
        logo: "/Asset 9@4x.png",
    },
    {
        id: 9,
        name: "Client 9",
        logo: "/Asset 10@4x.png",
    },
    {
        id: 10,
        name: "Client 10",
        logo: "/Asset 11@4x.png",
    },
    {
        id: 11,
        name: "Client 11",
        logo: "/Asset 12@4x.png",
    },
    {
        id: 12,
        name: "Client 12",
        logo: "/Asset 13@4x.png",
    },
    {
        id: 13,
        name: "Client 13",
        logo: "/Asset 14@4x.png",
    },
    {
        id: 14,
        name: "Client 14",
        logo: "/Asset 15@4x.png",
    },
    {
        id: 15,
        name: "Client 15",
        logo: "/Asset 16@4x.png",
    },
    {
        id: 16,
        name: "Client 16",
        logo: "/Asset 17@4x.png",
    },
    {
        id: 17,
        name: "Client 17",
        logo: "/Asset 18@4x.png",
    },
    {
        id: 18,
        name: "Client 18",
        logo: "/Asset 19@4x.png",
    },
    {
        id: 19,
        name: "Client 19",
        logo: "/Asset 20@4x.png",
    },
    {
        id: 20,
        name: "Client 20",
        logo: "/Asset 21@4x.png",
    },
    {
        id: 21,
        name: "Client 21",
        logo: "/Asset 22@4x.png",
    },
    {
        id: 22,
        name: "Client 22",
        logo: "/Asset 23@4x.png",
    },
    {
        id: 23,
        name: "Client 23",
        logo: "/Asset 24@4x.png",
    },
    {
        id: 24,
        name: "Client 24",
        logo: "/Asset 25@4x.png",
    },
    {
        id: 25,
        name: "Client 25",
        logo: "/Asset 26@4x.png",
    },
    {
        id: 26,
        name: "Client 26",
        logo: "/Asset 27@4x.png",
    },
    {
        id: 27,
        name: "Client 27",
        logo: "/Asset 28@4x.png",
    },
    {
        id: 28,
        name: "Client 28",
        logo: "/Asset 29@4x.png",
    },
    {
        id: 29,
        name: "Client 29",
        logo: "/Asset 30@4x.png",    
    },
    {
        id: 30,
        name: "Client 30",
        logo: "/Asset 31@4x.png",
    },
    {
        id: 31,
        name: "Client 31",
        logo: "/Asset 32@4x.png",
    }

]

export function ClientLogoCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  // Plugin for continuous smooth scrolling
  const autoplayPlugin = Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  })

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Trusted Clients</h2>
          <p className="text-gray-600 mt-2">Partnering with industry leaders to deliver excellence</p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: true, // Enables momentum scrolling
          }}
          plugins={[autoplayPlugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {clientLogos.map((client) => (
              <CarouselItem
                key={client.id}
                className="pl-4 flex items-center justify-center xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="h-24 flex items-center justify-center p-4 mx-auto">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={2500}
                    height={1500}
                    className="max-h-16 w-auto object-contain  transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export default ClientLogoCarousel
