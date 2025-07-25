"use client";

import { Calendar } from "@/components/ui/calendar";
import { Span } from "next/dist/trace";
import React, { useState } from "react";

const TestCalender = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <React.Fragment>
      Test Calender
      <section>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border shadow-sm"
          footer={
            date ? (
              <span className="text-xs text-red-600 p-2">{`Selected: ${date.toLocaleDateString()}`}</span>
            ) : (
              <span className="text-xs text-green-600"> "Pick a day."</span>
            )
          }
        />
      </section>
    </React.Fragment>
  );
};

export default TestCalender;
