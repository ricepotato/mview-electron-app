import React from "react";

interface ContentProps {
  contents: ContentItem[];
}
interface ContentItem {
  imageSrc: string;
  title: string;
}

export default function Content({ contents }: ContentProps) {
  return (
    <div>
      <ul className="flex flex-wrap">
        {contents.map((item) => (
          <li className="m-1 hover:shadow-lg ">
            <div className="h-40 w-40 bg-gray-200 flex justify-center">
              <img
                className="h-full"
                alt={item.imageSrc}
                src={item.imageSrc}
              ></img>
            </div>
            <div className="text-center">{item.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
