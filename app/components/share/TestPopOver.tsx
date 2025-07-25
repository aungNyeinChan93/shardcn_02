import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const TestPopOver = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <section className="flex w-full h-screen bg-slate-900 p-4 justify-center items-center text-white text-4xl">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger>PopOver </PopoverTrigger>
          <PopoverContent className="w-[400px] p-4 my-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est
            quas, quam hic dolores repellat nostrum, modi repellendus voluptates
            sed excepturi maxime, ea quibusdam totam at. Tempore in esse
            veritatis!
          </PopoverContent>
        </Popover>
      </section>
    </React.Fragment>
  );
};

export default TestPopOver;
