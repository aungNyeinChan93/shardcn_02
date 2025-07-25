import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import bird from "../../../public/images/birds.jpg";
import Image from "next/image";
const TestAvator = () => {
  return (
    <React.Fragment>
      Test Avator
      <section className="flex gap-4 ">
        <Avatar className="w-34 h-34">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-34 h-34">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {bird && (
          <Avatar className="w-34 h-34">
            <Image src={bird} alt="bird" />
            {/* <AvatarImage src={photo} /> */}
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}
      </section>
    </React.Fragment>
  );
};

export default TestAvator;
