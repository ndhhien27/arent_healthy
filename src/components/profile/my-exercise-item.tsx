import React from 'react';

import { ExerciseModel } from '@/models';

interface MyExerciseItemProps {
  exercise: ExerciseModel;
}

function MyExerciseItem({ exercise }: MyExerciseItemProps) {
  return (
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
  );
}

export default MyExerciseItem;
