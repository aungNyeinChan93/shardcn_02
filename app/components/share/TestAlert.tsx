import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";

interface TestAlertProps {
  title?: string | undefined;
  description?: string | undefined;
}

const TestAlert: React.FC<TestAlertProps> = ({ title, description }) => {
  return (
    <React.Fragment>
      <section>
        <Alert variant={"destructive"} className="bg-slate-100 ">
          <AlertTitle className="text-base flex gap-4 py-2 ">
            <CheckCircle2Icon />
            {title || "default title"}
          </AlertTitle>
          <AlertDescription className="text-xs">
            {description ||
              `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
            totam inventore doloremque aspernatur quam obcaecati repellendus
            quibusdam veniam quae harum?`}
          </AlertDescription>
        </Alert>
      </section>
    </React.Fragment>
  );
};

export default TestAlert;
