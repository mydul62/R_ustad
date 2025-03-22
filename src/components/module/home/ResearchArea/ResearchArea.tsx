
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionTitle from "../../SectionTitle";
import { researchAreas } from "@/components/shared/data/researchArea";



const ResearchArea = () => {
  return (
    <div className="py-[80px] container sm:w-[90%] mx-auto">
      <SectionTitle title="Our Research Areas" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
        {researchAreas?.map((area,i) => {
          const Icon = area.icon; // Dynamically render the icon
          return (
            <Card
              key={i}
              className=" bg-white  hover:bg-[#bc986b] hover:text-white transition-colors duration-500 ease-in"
            >
              <CardHeader>
                <CardTitle className="hidden"></CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Icon size={40} />
                  <h3 className="text-2xl font-bold ">{area.title}</h3>
                  <p>{area.description}</p>
                </div>
      
              </CardContent>
              <CardFooter>
            
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ResearchArea;
