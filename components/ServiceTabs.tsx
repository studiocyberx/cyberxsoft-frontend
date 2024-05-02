"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface DescriptionItemProps {
  heading: string;
  text: string;
}

interface TabDataProps {
  title: string;
  subtitle: string;
  description: DescriptionItemProps[];
}

const ServiceTabs = () => {
  const tabsData: TabDataProps[] = [
    {
      title: "Enhance Communication and Engagement",
      subtitle:
        "Our NLP solutions are designed to refine how businesses interact with customers and manage internal communications. With a focus on ethical AI, we ensure our technologies enhance user experiences while upholding privacy and fairness.",
      description: [
        {
          heading: "Chatbots and Virtual Assistants",
          text: "Deploy intelligent chatbots and virtual assistants that provide timely, context-aware, and accurate responses to customer inquiries, improving service quality and customer satisfaction.",
        },
        {
          heading: "Sentiment Analysis",
          text: "Utilize our sentiment analysis tools to gauge public sentiment and emotional undertones in customer feedback, social media, and beyond, enabling you to make informed business decisions.",
        },
      ],
    },
    {
      title: "Automate and Streamline Operations",
      subtitle:
        "Our NLP technologies automate routine tasks, streamline workflows, and optimize business processes, allowing your teams to focus on strategic activities.",
      description: [
        {
          heading: "Document Automation",
          text: "Automate the extraction and processing of information from documents, reducing manual errors and increasing efficiency in document-intensive processes like legal reviews, contract management, and compliance checks.",
        },
        {
          heading: "Language Translation",
          text: "Break language barriers within your organization and with your global audience by using our robust translation tools, ensuring clear and effective multilingual communication.",
        },
      ],
    },
    {
      title: "Ethical Considerations in NLP",
      subtitle:
        "Commitment to responsible AI is at the heart of our NLP services. We address ethical concerns head-on by implementing:",
      description: [
        {
          heading: "Bias Reduction",
          text: "Our models are continuously trained and updated to detect and reduce biases, ensuring fairness in automated decision-making and content generation.",
        },
        {
          heading: "Data Privacy",
          text: "We adhere to stringent data privacy standards, ensuring all textual data processed through our systems is handled with the highest confidentiality and security measures.",
        },
        {
          heading: "Transparent Algorithms",
          text: "We prioritize transparency in our NLP algorithms, providing explanations for how our models process and analyze text, fostering trust and reliability among users.",
        },
      ],
    },
  ];

  return (
    <>
      <Tabs defaultValue={tabsData[0].title} className="w-full space-y-8">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-full bg-custom-purple-400/5">
          {tabsData.map((tab) => (
            <TabsTrigger
              key={tab.title}
              value={tab.title}
              className="transition-all duration-300 ease-in whitespace-pre-wrap data-[state=active]:bg-custom-purple-300 data-[state=active]:text-white data-[state=active]:shadow-lg hover:shadow-md h-full"
            >
              <CardHeader className="w-full space-y-4">
                <CardTitle className="uppercase">{tab.title}</CardTitle>
                <CardDescription className="whitespace-pre-wrap capitalize">
                  {tab.subtitle}
                </CardDescription>
              </CardHeader>
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsData.map((tab, index) => (
          <TabsContent key={index} value={tab.title}>
            <motion.div
              initial={{ translateX: 0 }}
              animate={{
                transform: ["translateX(-200px)", "translateX(0px)"],
                opacity: [0, 1],
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.1,
                at: "-0.1",
                duration: 0.9,
                type: "spring",
              }}
            >
              <Card className="p-8 space-y-4">
                {tab.description.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <CardTitle className="inline-block data-[state=active]:text-red-400 relative after:absolute after:content-[''] after:w-full after:h-1 after:block after:bg-custom-purple-400 after:top-full after:right-0 after:mt-1 after:left-0 after:animate-line-width">
                      {item.heading}
                    </CardTitle>
                    <CardDescription className="text-gray-700 text-base">
                      {item.text}
                    </CardDescription>
                  </div>
                ))}
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default ServiceTabs;
