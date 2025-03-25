import React from "react";

export const StatusBar: React.FC = () => {
  return (
    <div className="w-full pt-5">
      <div className="flex justify-between items-center px-4 h-8">
        <div className="text-black font-semibold text-base">9:41</div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-4">
            <svg
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5 0h-17C.673 0 0 .673 0 1.5v9C0 11.327.673 12 1.5 12h17c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5zm.5 10.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v9z"
                fill="#171717"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 3.5H3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5z"
                fill="#171717"
              />
            </svg>
          </div>
          <div className="w-5 h-4">
            <svg
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 1.5c2.28 0 4.22 1.21 5.31 3.02l1.1-1.09c-1.4-2.14-3.77-3.53-6.41-3.53-2.64 0-5.01 1.39-6.41 3.53l1.1 1.09c1.09-1.81 3.03-3.02 5.31-3.02zm0 3.5c1.36 0 2.5.93 2.87 2.19l1.1-1.09c-.72-1.59-2.31-2.7-3.97-2.7-1.66 0-3.25 1.11-3.97 2.7l1.1 1.09c.37-1.26 1.51-2.19 2.87-2.19zm0 3.5c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zm-7.5 5.01c.63.72 1.73.79 2.45.15.17-.15.31-.33.39-.55l1.55-3.76c.43-.13.86-.35 1.21-.7.7-.7.91-1.7.64-2.58l-4.3 4.3-1.72-1.71c-.28.75-.07 1.58.48 2.13.3.3.67.5 1.05.6l-1.55 3.77c-.2.49-.98.73-1.47.53-.16-.07-.3-.18-.4-.32C1.12 15.86 1.12 15.23 1.5 14.81l.93-1.09-.94-2-.93 1.09zm14.93-1.79c.49.56.5 1.39.02 1.96-.1.13-.23.25-.39.32-.49.2-1.27-.04-1.47-.53l-1.55-3.77c.38-.1.75-.3 1.05-.6.55-.55.76-1.38.48-2.12l-1.72 1.71-4.3-4.3c-.27.88-.06 1.88.64 2.58.35.35.78.57 1.21.7l1.55 3.76c.08.21.22.4.39.55.72.64 1.82.57 2.45-.15l.93 1.09-.93 2 .93-1.09c.38.42.38 1.05.1 1.46z"
                fill="#171717"
              />
            </svg>
          </div>
          <div className="w-8 h-4 relative">
            <div className="absolute top-0 left-0 w-full h-full rounded-sm border border-black opacity-35"></div>
            <div className="absolute top-0 right-0 h-full w-1/4 bg-black opacity-40 rounded-tr-sm rounded-br-sm"></div>
            <div className="absolute top-[2px] left-[2px] w-[16px] h-[8px] bg-black rounded-[1px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
