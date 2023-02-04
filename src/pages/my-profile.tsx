import classNames from 'classnames';
import dayjs from 'dayjs';
import { useState } from 'react';

import myRecommend1 from '@/assets/MyRecommend-1.jpg';
import myRecommend2 from '@/assets/MyRecommend-2.jpg';
import myRecommend3 from '@/assets/MyRecommend-3.jpg';
import Button from '@/components/button';
import Chart from '@/components/chart';
import LayoutContainer from '@/components/layout-container';
import EntryItem from '@/components/profile/entry-item';
import withAuth from '@/HOCs/withAuth';

const ChartFilters = [
  { label: '日', value: 'day' },
  { label: '週', value: 'week' },
  { label: '月', value: 'month' },
  { label: '年', value: 'year' },
];

function MyProfile() {
  const [chartFilter, setChartFilter] = useState<string>('week');
  const entries = [
    {
      label: 'BODY RECORD',
      image: myRecommend1,
      description: '自分のカラダの記録',
    },
    {
      label: 'MY EXERCISE',
      image: myRecommend2,
      description: '自分の運動の記録',
    },
    {
      label: 'MY DIARY',
      image: myRecommend3,
      description: '自分の日記',
    },
  ];

  const exercises = Array.from({ length: 8 }, (_, idx) => ({
    id: idx,
    label: '家事全般（立位・軽い）',
    time: 10,
    value: 26,
  }));

  const myDiaris = Array.from({ length: 8 }, (_, idx) => ({
    id: idx,
    time: new Date().toISOString(),
    description:
      '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  }));

  return (
    <LayoutContainer>
      <div className="center">
        <div className="flex w-full justify-center mt-14">
          {entries.map((entry, idx) => (
            <EntryItem idx={idx} entry={entry} key={entry.label} />
          ))}
        </div>
        <div className="bg-[#414141] mt-14 text-white px-6 py-4">
          <span>MY EXERCISE</span>
          <span className="text-[22px] ml-3">2021.05.21</span>
          <div className="mt-4">
            <Chart />
          </div>
          <div className="mt-4">
            {ChartFilters.map((c) => (
              <button
                key={c.value}
                onClick={() => setChartFilter(c.value)}
                className={classNames(
                  'w-14 h-6 rounded-full bg-white text-[#FFCC21] mr-2 hover:bg-[#FFCC21] hover:text-white',
                  { 'bg-[#FFCC21] !text-white': chartFilter === c.value },
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-[#414141] mt-14 px-6 py-4 text-white">
          <span>MY EXERCISE</span>
          <span className="text-[22px] ml-3">2021.05.21</span>
          <ul className="grid grid-cols-2 gap-x-6">
            {exercises.map((exercise) => (
              <li
                key={exercise.id}
                className="text-white border-b-[1px] border-solid border-[#777777] mt-2 pb-[2px]"
              >
                <div className="flex">
                  &bull;
                  <div className="ml-3 flex justify-between w-full">
                    {exercise.label}
                    <span className="text-[#FFCC21]">{exercise.time}</span>
                  </div>
                </div>
                <span className="text-[#FFCC21] ml-5">{exercise.value}kcal</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 mb-8">
          <span className="text-[22px]">MY DIARY</span>
          <div className="grid grid-cols-4 gap-3 mt-2">
            {myDiaris.map((myDiary) => (
              <div
                className="border-2 border-[#707070] border-solid p-4"
                key={myDiary.id}
              >
                <p className="text-lg mb-0">{dayjs(myDiary.time).format('YYYY/MM/DD')}</p>
                <p className="text-lg mb-2">{dayjs(myDiary.time).format('HH:mm')}</p>
                <p className="text-xs whitespace-pre-line">{myDiary.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Button label="自分の日記をもっと見る" />
        </div>
      </div>
    </LayoutContainer>
  );
}

export default withAuth(MyProfile);
