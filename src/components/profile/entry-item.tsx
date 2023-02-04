import classNames from 'classnames';
import React from 'react';

interface IEntryItemProps {
  idx: number;
  entry: {
    label: string;
    image: string;
    description: string;
  };
}

function EntryItem({ idx, entry }: IEntryItemProps) {
  return (
    <div
      className={classNames(
        'w-[288px] h-[288px] bg-black border-[24px] border-solid border-[#FFCC21] relative',
        { 'ml-12': idx > 0 },
      )}
    >
      <img
        src={entry.image}
        alt=""
        className="w-full h-full mix-blend-luminosity opacity-25 object-cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full">
        <span className="text-[#FFCC21] text-[25px] mb-[10px]">{entry.label}</span>
        <div className="bg-primary w-[160px] h-6 text-center">{entry.description}</div>
      </div>
    </div>
  );
}

export default EntryItem;
