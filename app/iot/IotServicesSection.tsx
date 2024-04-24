import Image from "next/image";

interface servicesProps {
  title: string;
  description: string;
  application: string;
  image: string;
}

const services: servicesProps[] = [
  {
    title: "Predictive Equipment Care",
    description:
      "With our IoT services, remote tracking of equipment efficiency parameters becomes possible. You can prevent potential dysfunction from surfacing and delay in production.",
    application: "Manufacturing Industry",
    image: "/predictive-equipment.png",
  },
  {
    title: "Remote Handling of Machinery/ Appliances",
    description:
      "Automate manual tasks via control applications for basic actions (activation/deactivation, opening/closing) and complex industrial processes like robot-assisted order picking.",
    application: "Manufacturing and Smart Home Technology Industry",
    image: "/remote-handling.png",
  },
  {
    title: "Regulating Environmental Conditions",
    description:
      "Monitoring environmental factors (temperature, humidity, pollution, CO2) ensures storage compliance and optimizes industrial equipment and workspace conditions for safety and efficiency.",
    application:
      "Manufacturing, Smart Home Technology, and Agriculture Industry",
    image: "/environmental-conditions.png",
  },
  {
    title: "Optimizing Energy Utilization",
    description:
      "Our solutions optimize energy management by adjusting usage based on external conditions, benefiting personal environments like home lighting and public spaces such as street lighting.",
    application: "Smart Home Technology Industry",
    image: "/optimize-energy.png",
  },
  {
    title: "Automated Inventory Administration",
    description:
      "Our system enables prompt and proactive actions by remote monitoring of asset locations and movements and sending out instant alerts for low stock levels.",
    application: "Real Estate Industry",
    image: "/inventory-admin.png",
  },
  {
    title: "Remote Wellness Tracking",
    description:
      "We use wearables for telehealth, tracking patients' vital signs deviations from baseline, promptly notifying physicians, advancing remote monitoring in healthcare.",
    application: "Healthcare Industry",
    image: "/remote-wellness.png",
  },
  {
    title: "Video Monitoring with Instant Signals",
    description:
      "We integrate cameras for swift detection of abnormal activity in surveillance zones, aiding in crime prevention, early fire detection, and traffic incident alerts, bolstering safety measures.",
    application: "Smart Home Technology Industry",
    image: "/video-monitoring.png",
  },
  {
    title: "Service Charges Based on Consumption",
    description:
      "Keeping track of asset usage and its quality to pre-determine any alarming situation that may arise. Eventually, make tweaks to suit the pricing plan for service.",
    application: "Insurance and Rental Industry",
    image: "/services-charges.png",
  },
  {
    title: "Interconnected Mobility",
    description:
      "Ensuring adherence to transportation standards by real-time tracking of cargo during transit.",
    application: "Logistics and Transportation Industry",
    image: "/interconnected-mobility.png",
  },
  {
    title: "Quality Assurance for Products",
    description:
      "Heading manufacturing processes by monitoring the quality metrics of products and ensuring compliance with established standards.",
    application: "Manufacturing Industry",
    image: "/quality-assurance.png",
  },
];

const IotServicesSection = () => {
  return (
    <section className="h-full w-full bg-custom-purple-600">
      <div className="container pt-12 pb-8 sm:py-12 px-8 sm:px-10 md:px-20 space-y-4">
        <h2 className="text-custom-purple-300 uppercase text-4xl font-bold text-center">
          Fueling Industry-Wide Progress with IoT Innovation{" "}
        </h2>
        <p className="text-white text-center mx-auto max-w-[850px] text-base md:text-lg">
          Our services are structured to establish secure technology frameworks,
          empowering your enterprise for refined data operations. Recognizing
          the far-reaching advantages of IoT, we strategically employ this
          technology to achieve a range of industry goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8">
          {services.map((service) => (
            <div className="flex items-start gap-4" key={service.title}>
              <Image
                src={service.image}
                alt={service.title}
                width={100}
                height={100}
              />
              <div className="space-y-3">
                <h3 className="text-white font-bold uppercase text-xl">
                  {service.title}
                </h3>
                <p className="text-white">{service.description}</p>

                <p className="text-white">
                  <span className="text-custom-purple-300 font-bold">
                    Application:{" "}
                  </span>
                  {service.application}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IotServicesSection;
