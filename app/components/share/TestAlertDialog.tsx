"use client ";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import TestAlert from "./TestAlert";

const TestAlertDialog = () => {
  return (
    <React.Fragment>
      <section>
        <div className=" text-center w-full h-[100px] p-4">
          <AlertDialog>
            <AlertDialogTrigger className="text-lg  capatalize border-2 border-l-8 border-red-500 rounded-2xl p-4 font-extrabold ">
              Open Alert Dialog
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-red-400 text-base ">
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  <TestAlert
                    title="Something wrong!!"
                    description="Test Desc"
                  />
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => alert("success delete")}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TestAlertDialog;
