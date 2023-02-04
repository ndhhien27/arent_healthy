/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';

interface IDropdownProps {
  children: React.ReactNode;
  menuItems: Array<{
    label: string;
    path?: string;
    action?: () => void;
  }>;
  isOpen: boolean;
  onHide: () => void;
}

function Dropdown({ children, menuItems, isOpen, onHide }: IDropdownProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed w-screen h-screen top-0 left-0"
          id="overlay"
          onClick={onHide}
        />
      )}
      <div className="relative flex items-center ml-12">
        {children}
        {isOpen ? (
          <div className="absolute bottom-0 right-0 translate-y-full w-[260px] bg-[#777777] z-[999]">
            <ul>
              {menuItems.map((item) => (
                <li key={item.label}>
                  {item.path ? (
                    <Link to={item.path} className="w-full h-full">
                      <div className="px-8 py-6">{item.label}</div>
                    </Link>
                  ) : null}
                  <div className="w-full h-[1px] opacity-10 bg-white mix-blend-normal" />
                  <div className="w-full h-[1px] opacity-25 bg-[#2E2E2E] mix-blend-normal" />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Dropdown;
