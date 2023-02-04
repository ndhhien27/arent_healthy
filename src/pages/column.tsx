import dayjs from 'dayjs';
import { useQuery } from 'react-query';

import Button from '@/components/button';
import LayoutContainer from '@/components/layout-container';
import { ColumnModel } from '@/models';
import { getColumns } from '@/services/column-service';

function Column() {
  const { data: columns } = useQuery('GET_COLUMNS', getColumns, {
    select: (data) => data.data,
  });

  return (
    <LayoutContainer>
      <div className="center">
        <div className="grid grid-cols-4 gap-x-8 mt-14">
          <div className="bg-[#2E2E2E] h-36 text-white py-6 px-2 flex flex-col items-center justify-between text-center">
            <span className="text-[22px] text-[#FFCC21] mb-[10px]">
              RECOMMENDED COLUMN
            </span>
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
            <span className="text-[22px] text-[#FFCC21] mb-[10px]">
              RECOMMENDED BEAUTY
            </span>
            <div className="flex flex-col items-center">
              <div className="w-14 bg-white h-[1px]" />
              <span className="mt-2">美容</span>
            </div>
          </div>
          <div className="bg-[#2E2E2E] h-36 text-white py-6 px-2 flex flex-col items-center justify-between text-center">
            <span className="text-[22px] text-[#FFCC21] mb-[10px]">
              RECOMMENDED HEALTH
            </span>
            <div className="flex flex-col items-center">
              <div className="w-14 bg-white h-[1px]" />
              <span className="mt-2">健康</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-14">
          {columns?.map((column: ColumnModel) => (
            <div key={column.id}>
              <div className="relative">
                <img
                  src={column.image}
                  alt=""
                  className="w-full h-[234px] object-cover"
                />
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
          ))}
        </div>
        <div className="text-center mt-6">
          <Button label="コラムをもっと見る" />
        </div>
      </div>
    </LayoutContainer>
  );
}

export default Column;
