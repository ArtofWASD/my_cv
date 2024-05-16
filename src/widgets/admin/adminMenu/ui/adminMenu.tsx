"use client";

import { useState } from "react";

export const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      <ul>
        <li className={isOpen?`w-32 h-5`:`hidden`}>Menu item 1</li>
        <li className={isOpen?`w-32 h-5`:`hidden`}>Menu item 2</li>
        <li className={isOpen?`w-32 h-5`:`hidden`}>Menu item 3</li>
        <li className={isOpen?`w-32 h-5`:`hidden`}>Menu item 4</li>
        <li className={isOpen?`w-32 h-5`:`hidden`}>Menu item 5</li>
      </ul>
    </div>
  );
};
