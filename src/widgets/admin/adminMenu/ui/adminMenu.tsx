"use client";
import { useState } from "react";
export const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mockMenuItems = [
    "Menu item 1",
    "Menu item 2",
    "Menu item 3",
    "Menu item 4",
    "Menu item 5",
  ];
  return (
    <div className="menu ml-2">
      <button onClick={() => setIsOpen(!isOpen)}>Some Admin items</button>
      <ul className="">
        {mockMenuItems &&
          mockMenuItems.map((item, index) => (
            <li key={index} className={isOpen ? `h-5 w-32 hover:scale-125 hover:ml-5 py-3  ` : `hidden`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};
