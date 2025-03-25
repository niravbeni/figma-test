import React, { ReactNode } from "react";
import { StatusBar } from "./StatusBar";
import { HomeBar } from "./HomeBar";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  hideStatusBar?: boolean;
  hideHomeBar?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  hideStatusBar = false,
  hideHomeBar = false,
}) => {
  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="relative overflow-hidden w-[402px] h-[852px] bg-white rounded-[45px] shadow-lg flex flex-col">
        {!hideStatusBar && <StatusBar />}

        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-full z-10 mt-2"></div>

        <div className="flex-1 px-7 pt-16 pb-6 flex flex-col">
          {title && (
            <h1 className="text-4xl font-medium text-black my-6 -tracking-[0.03em]">
              {title}
            </h1>
          )}

          <div className="flex-1">{children}</div>
        </div>

        {!hideHomeBar && <HomeBar />}
      </div>
    </div>
  );
};
