import React from 'react';

function RecommendedItems() {
  return (
    <div className="grid grid-cols-4 gap-x-8 mt-14">
      <div className="bg-[#2E2E2E] h-36 text-white py-6 px-2 flex flex-col items-center justify-between text-center">
        <span className="text-[22px] text-[#FFCC21] mb-[10px]">RECOMMENDED COLUMN</span>
        <div className="flex flex-col items-center">
          <div className="w-14 bg-white h-[1px]" />
          <span className="mt-2">オススメ</span>
        </div>
      </div>
      <div className="bg-[#2E2E2E] h-36 text-white py-6 px-2 flex flex-col items-center justify-between text-center">
        <span className="text-[22px] text-[#FFCC21] mb-[10px]">RECOMMENDED DIET</span>
        <div className="flex flex-col items-center">
          <div className="w-14 bg-white h-[1px]" />
          <span className="mt-2">ダイエット</span>
        </div>
      </div>
      <div className="bg-[#2E2E2E] h-36 text-white py-6 px-2 flex flex-col items-center justify-between text-center">
        <span className="text-[22px] text-[#FFCC21] mb-[10px]">RECOMMENDED BEAUTY</span>
        <div className="flex flex-col items-center">
          <div className="w-14 bg-white h-[1px]" />
          <span className="mt-2">美容</span>
        </div>
      </div>
      <div className="bg-[#2E2E2E] h-36 text-white py-6 px-2 flex flex-col items-center justify-between text-center">
        <span className="text-[22px] text-[#FFCC21] mb-[10px]">RECOMMENDED HEALTH</span>
        <div className="flex flex-col items-center">
          <div className="w-14 bg-white h-[1px]" />
          <span className="mt-2">健康</span>
        </div>
      </div>
    </div>
  );
}

export default RecommendedItems;
