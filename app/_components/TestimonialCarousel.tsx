"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import OWR_logo from "@/public/OWR_logo.png"

import AWT_logo from "@/public/AWT_logo.png"
import yontem_logo from "@/public/yontem_logo.png"
import Image, { type StaticImageData } from "next/image"
import { Quote } from "lucide-react"
import Link from "next/link"

interface CarouselItemsProps {
  id: number
  logo: StaticImageData
  projectName: string
  testimonial: string
}

const carouselItems: CarouselItemsProps[] = [
  {
    id: 1,
    logo: yontem_logo,
    projectName: "Yontem Teknolojis",
    testimonial:
      "CyberXSoft delivered uninterrupted SAP portal integration that enhanced our simulation platform's backend efficiency. Real-time insights and simplified content updates served as a hidden asset.",
    // href: "/",
  },
  {
    id: 2,
    logo: OWR_logo,
    projectName: "OWR (One World Rental)",
    testimonial:
      "The dashboards created by CyberXSoft gave us a crystal-clear view of our global rental operations. Their SAP expertise helped us make smarter, faster decisions.",
    // href: "/",
  },
  {
    id: 3,
    logo: AWT_logo,
    projectName: "AWT (Army Welfare Trust)",
    testimonial:
      "CyberXSoft helped us unify content control across business units by integrating SAP portals with our web app. Their solution brought clarity, control, and user insight.",
    // href: "/",
  },
]

const TestimonialCarousel = () => {
  const totalItems = carouselItems.length

  return (
    <div className="px-5 sm:px-14 md:px-24">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1, // Scroll 2 slides at a time on large screens
        }}
        plugins={[
          Autoplay({
            delay: 4500,
          }),
        ]}
        className="w-full max-w-7xl mx-auto relative"
      >
        <CarouselContent className="-ml-4">
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} className="pl-4 w-full md:basis-1/2 lg:basis-1/2">
              <Card className="bg-[#0e2b4d] overflow-hidden h-full flex flex-col">
                <CardHeader className="flex flex-col items-center text-center pt-8 pb-4">
                  {/* Project logo */}
                  <div className="w-40 h-20  p-1 mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.logo || "/placeholder.svg"}
                      alt={`${item.projectName} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Project name */}
                  <CardTitle className="text-white text-xl font-medium">{item.projectName}</CardTitle>

                  
                </CardHeader>

                <CardContent className="p-6 flex-grow">
                  {/* Testimonial content with quote icon */}
                  <div className="relative">
                    <Quote className="text-green-500 w-8 h-8 absolute -top-3 -left-2 opacity-70" />
                    <CardDescription className="text-white text-base pl-6 italic">{item.testimonial}</CardDescription>
                  </div>
                </CardContent>

              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows - hidden on mobile, visible on md screens and up */}
        <div className="hidden md:flex justify-between absolute w-full top-1/2 -translate-y-1/2 -left-4 -right-4">
          <CarouselPrevious className="bg-transparent text-[#0e2b4d] text-4xl hover:bg-transparent hover:text-[#0e2b4d]/80 border-none" />
          <CarouselNext className="bg-transparent text-[#0e2b4d] text-4xl hover:bg-transparent hover:text-[#0e2b4d]/80 border-none" />
        </div>
      </Carousel>
    </div>
  )
}

export default TestimonialCarousel
