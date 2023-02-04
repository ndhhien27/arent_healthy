import dayjs from 'dayjs';
import React from 'react';

import { Meal } from '@/models';

function MealItem({ meal }: { meal: Meal }) {
  return (
    <li key={meal.id} className="w-[calc(25%-8px)] h-[234px] relative mr-2 mb-2">
      <img src={meal.image} alt="" className="w-full h-[234px] object-cover" />
      <div className="absolute bottom-0 left-0 bg-[#FFCC21] text-white p-2">
        {dayjs(meal.createdAt).format('MM.DD')}.{meal.name}
      </div>
    </li>
  );
}

export default MealItem;
