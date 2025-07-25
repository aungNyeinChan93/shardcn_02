import React, { ReactNode } from "react";
interface TestLayoutProps {
  children: ReactNode;
}

const TestLayout: React.FC<TestLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <section className="w-11/12 mx-auto my-4 p-4 bg-slate-200 h-screen">
        {children}
      </section>
    </React.Fragment>
  );
};

export default TestLayout;
