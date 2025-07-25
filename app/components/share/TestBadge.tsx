import React from "react";
import { Badge } from "@/components/ui/badge";
const Testbadge = () => {
  return (
    <React.Fragment>
      test badge
      <section>
        <Badge variant="default">Badge</Badge>
        <Badge variant="destructive" className="w-8 h-8 p-2 ms-3 rounded-full">
          99+
        </Badge>

        <div className="parent relative w-[400px] p-2 my-2 bg-red-50 rounded">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis repellendus impedit quaerat aliquam earum vitae, sed
            sequi fugiat itaque? Omnis!
          </p>
          <Badge
            className="absolute top-[-10] right-[-10] rounded-full w-5 h-5 p-2 "
            variant={"destructive"}
          >
            <span className="text-[9px]">+99</span>
          </Badge>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Testbadge;
