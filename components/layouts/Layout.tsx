import React, { ReactNode } from "react";
import { Card, CardContent } from "../ui/card";

interface LayoutProps {
  children: ReactNode;
}
// test

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Card className="w-full max-w-lg mx-auto z-10 relative -top-4 lg:top:0">
      <CardContent className="px-6 py-3">{children}</CardContent>
    </Card>
  );
};
