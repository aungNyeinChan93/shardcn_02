import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <section className="p-4">
        <Button variant={"destructive"}>
          <Link href={"/tests"}>Go To Tests</Link>
        </Button>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
