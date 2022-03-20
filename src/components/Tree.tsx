import React, { useEffect, useState } from "react";
import TreeItem from "./TreeItem";
import fs from "fs";

interface TreeItemInterface {
  name: string;
  children?: TreeItemInterface[];
}

export default function Tree() {
  const [tree, setTree] = useState<TreeItemInterface[]>([
    {
      name: "2021.10.23",
      children: [
        {
          name: "2021.10.23 123",
          children: [{ name: "2021.10.23 144" }],
        },
        { name: "2021.10.23 345" },
      ],
    },
    { name: "2021.12.23" },
  ]);

  return (
    <div>
      <h3>Root Directory</h3>
      <ul className="">
        {tree.map((item) => (
          <TreeItem item={item} />
        ))}
      </ul>
    </div>
  );
}
