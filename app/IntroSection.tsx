import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const IntroSection = () => {
  return (
    <Card className="bg-custom-purple-500 max-w-[95%] md:max-w-[70%] 2xl:max-w-[1400px] mx-auto px-4 py-8 mt-4 sm:-mt-10 lg:-mt-20 z-30 relative border-none">
      <h6 className="text-custom-purple-50 font-bold text-lg uppercase">
        BigO Comprehensive Services:
      </h6>
      <CardTitle className="text-white uppercase text-3xl font-tommy font-normal">
        Transforming Data into <span className="font-bold">Insights</span>
      </CardTitle>

      <CardDescription className="text-white mt-4">
        The business world is now highly reliant on the use of advanced
        technologies, such as Artificial Intelligence (AI), Machine Learning
        (ML), and more, to refine its decision-making process and boost overall
        growth. But the question remains: which form of technology will lead to
        innovation and reinvention of success, not tech chaos?
      </CardDescription>

      <CardDescription className="text-white mt-4">
        At BigO, we strive to push the boundaries of innovation in the world of
        technology with our efficient responsible AI-driven Business
        Intelligence (BI) solutions. We empower Small and Medium Enterprises
        (SMEs) to stay ahead of the competitive curve with data-driven insights
        and analytics. With a comprehensive suite of advanced AI and BI
        services, get set to escalate your decision-making prowess.{" "}
      </CardDescription>
    </Card>
  );
};

export default IntroSection;
