import dayjs from 'dayjs';
import React from 'react';

import { ColumnModel } from '@/models';

interface ColumnItemProps {
  column: ColumnModel;
}

function ColumnItem({ column }: ColumnItemProps) {
  return (
    <div>
      <div className="relative">
        <img src={column.image} alt="" className="w-full h-[234px] object-cover" />
        <div className="absolute bottom-0 left-0 bg-[#FFCC21] text-white p-2">
          {dayjs(column.createdAt).format('YYYY.MM.DD')}
          <span className="ml-3">{dayjs(column.createdAt).format('HH:mm')}</span>
        </div>
      </div>
      <p className="mt-2">{column.description}</p>
      <div className="text-sm text-primary">
        {column.tags.map((tag) => (
          <span key={tag} className="mr-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ColumnItem;
