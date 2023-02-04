import { useQuery } from 'react-query';

import iconCup from '@/assets/svg/icon_cup.svg';
import iconKnife from '@/assets/svg/icon_knife.svg';
import Button from '@/components/button';
import Chart from '@/components/chart';
import DateRate from '@/components/home/date-rate';
import MealItem from '@/components/home/meal-item';
import LayoutContainer from '@/components/layout-container';
import withAuth from '@/HOCs/withAuth';
import { Meal } from '@/models';
import { getMeals } from '@/services/meal-service';

function Home() {
  const { data: meals } = useQuery(['GET_MEALS'], getMeals, {
    select: (data) => data.data,
  });

  return (
    <LayoutContainer>
      <div className="center flex flex-col items-center">
        <div className="grid grid-cols-3">
          <DateRate />
          <div className="bg-[#2E2E2E] col-span-2 px-8 py-4">
            <Chart />
          </div>
        </div>
        <div className="flex mt-7">
          <div className="hex mr-[84px]">
            <img src={iconKnife} alt="" />
            Morning
          </div>
          <div className="hex mr-[84px]">
            <img src={iconKnife} alt="" />
            Lunch
          </div>
          <div className="hex mr-[84px]">
            <img src={iconKnife} alt="" />
            Dinner
          </div>
          <div className="hex">
            <img src={iconCup} alt="" />
            Snack
          </div>
        </div>
        <div className="my-7">
          <ul className="flex flex-wrap">
            {meals?.map((meal: Meal) => (
              <MealItem meal={meal} key={meal.id} />
            ))}
          </ul>
        </div>
        <Button label="記録をもっと見る" />
      </div>
    </LayoutContainer>
  );
}

export default withAuth(Home);
