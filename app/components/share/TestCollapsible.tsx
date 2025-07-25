"use client ";

import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CornerRightDown } from "lucide-react";

const TestCollapsible = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <React.Fragment>
      <section className="w-[500px] ">
        <Collapsible
          open={open}
          onOpenChange={setOpen}
          className="bg-slate-100 p-4 rounded mt-4"
        >
          <CollapsibleTrigger className="p-4 text-red-400 font-semibold cursor-pointer flex justify-start items-center gap-2">
            <span> Collapsible Tigger</span>
            <span className="inline">
              <CornerRightDown size={20} strokeWidth={1.5} />
            </span>
          </CollapsibleTrigger>
          <div className="p-3 text-base bg-slate-600 text-white my-2 rounded mx-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, alias. Minima, delectus.
          </div>
          <CollapsibleContent className="p-3 text-base bg-slate-600 text-white my-2 rounded mx-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, alias. Minima, delectus.
          </CollapsibleContent>
          <CollapsibleContent className="p-3 text-base bg-slate-600 text-white my-2 rounded mx-2">
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </CollapsibleContent>
        </Collapsible>
      </section>
    </React.Fragment>
  );
};

export default TestCollapsible;
