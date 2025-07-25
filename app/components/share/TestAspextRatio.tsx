import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import bird from "../../../public/images/birds.jpg";

const TestAspectRatio = () => {
  return (
    <React.Fragment>
      Aspect Ratio
      <section>
        <AspectRatio
          className="bg-cyan-50 rounded flex flex-col sm:flex-row justify-center items-center space-x-1.5 gap-3"
          ratio={16 / 9}
        >
          <Image
            src={bird}
            alt="Image"
            className="rounded-md object-cover w-60 h-60"
          />
          <Image
            src={bird}
            alt="Image"
            className="rounded-md object-cover w-60 h-60"
          />
        </AspectRatio>
      </section>
    </React.Fragment>
  );
};

export default TestAspectRatio;
