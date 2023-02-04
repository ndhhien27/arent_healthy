import React from 'react';

import d01 from '@/assets/d01.jpg';

function DateRate() {
  return (
    <div className="relative col-span-1">
      <img src={d01} alt="" className="w-[540px] h-[316px] object-cover" />
      <div className="absolute inline-flex items-center justify-center overflow-hidden rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90">
        <svg className="w-[180px] h-[180px]">
          <circle
            className="text-transparent"
            strokeWidth={5}
            stroke="currentColor"
            fill="transparent"
            r="90"
            cx="90"
            cy="90"
          />
          <circle
            className="text-white"
            strokeWidth={5}
            strokeDasharray={180 * Math.PI}
            strokeDashoffset={180 * Math.PI - (70 / 100) * 180 * Math.PI}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="90"
            cx="90"
            cy="90"
          />
        </svg>
        <div className="absolute text-white rotate-90">
          <span className="text-md">05/21</span>&nbsp;
          <span className="text-xl">75%</span>
        </div>
      </div>
    </div>
  );
}

export default DateRate;
