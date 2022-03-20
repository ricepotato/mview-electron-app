import React from "react";
import { useState } from "react";

interface TreeItemProps {
  item: TreeItemInterface;
}

interface TreeItemInterface {
  name: string;
  children?: TreeItemInterface[];
}

export default function TreeItem({ item }: TreeItemProps) {
  const [showChildren, setShowChildren] = useState(false);
  const onClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <li className="select-none">
      <div
        onClick={onClick}
        className="flex space-x-1 mt-1 cursor-pointer hover:text-blue-400"
      >
        {item.children ? (
          <div>
            {showChildren ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>
        ) : (
          <div className="h-6 w-6"></div>
        )}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
        </div>
        <div>{item.name}</div>
      </div>
      {item.children && showChildren ? (
        <ul className="pl-4">
          {item.children.map((item) => (
            <TreeItem item={item} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}
