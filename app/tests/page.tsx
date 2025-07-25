"use client";

import { Button } from "@/components/ui/button";
import { House, Loader2Icon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import TestAccordion from "../components/share/TestAccordion";
import TestAlert from "../components/share/TestAlert";
import TestAlertDialog from "../components/share/TestAlertDialog";
import TestAspectRatio from "../components/share/TestAspextRatio";
import TestAvator from "../components/share/TestAvator";
import Testbadge from "../components/share/TestBadge";
import TestBreadcrumb from "../components/share/TestBreadcrumb";
import TestCalender from "../components/share/TestCalender";
import TestCarousel from "../components/share/TestCarousel";
import TestCollapsible from "../components/share/TestCollapsible";
import TestPopOver from "../components/share/TestPopOver";

const TestsPage = () => {
  const [state, setState] = useState(false);
  return (
    <React.Fragment>
      <section>
        <h3 className="text-2xl font-semibold text-center p-3 text-green-400 ">
          Tests Page
        </h3>
        <Button asChild variant={"link"}>
          <Link href={"/"}>Go To Home</Link>
        </Button>

        <Button asChild status={"isDisable"} variant={"alert"}>
          <Link href={"#"}>Test Customize</Link>
        </Button>

        <Button variant={"default"} size={"sm"}>
          size -sm{" "}
        </Button>
        <Button
          onClick={() => setState((prev) => !prev)}
          variant={"secondary"}
          size={"lg"}
        >
          Toggle <House size={"sm"} />
        </Button>
        <Button
          className="ms-1 inline-flex lg:min-w-15"
          variant={"outline"}
          size={"icon"}
        >
          <House size={28} strokeWidth={1.5} absoluteStrokeWidth />
          <Loader2Icon className="animate-spin" />
        </Button>

        <section>
          {state && <TestAccordion />}
          {state && <TestAlert />}
          {state && <TestAlertDialog />}
          {state && <TestAspectRatio />}
          {state && <TestAvator />}
          {state && <Testbadge />}
          {state && <TestBreadcrumb current="Test Page" />}
          {state && <TestCalender />}
          {state && <TestCarousel />}
          {state && <TestCollapsible />}
          <TestPopOver />
        </section>
      </section>
    </React.Fragment>
  );
};

export default TestsPage;
