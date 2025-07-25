import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";

const TestAlert = () => {
  return (
    <React.Fragment>
      <section>
        <p className="text-center text-2xl font-mono p-2">Test Alert </p>
        <Alert variant={"destructive"} className="bg-slate-100 ">
          <AlertTitle className="text-base flex gap-4 py-2 ">
            <CheckCircle2Icon />
            this is alert title
          </AlertTitle>
          <AlertDescription className="text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
            totam inventore doloremque aspernatur quam obcaecati repellendus
            quibusdam veniam quae harum?
          </AlertDescription>
        </Alert>
      </section>
    </React.Fragment>
  );
};

export default TestAlert;
