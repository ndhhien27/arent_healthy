import { faker } from '@faker-js/faker';
import { rest } from 'msw';

import { API_URL } from '@/services/constant';

const mealHandlers = [
  rest.get(`${API_URL}/meals`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        Array.from({ length: 8 }).map((_, idx) => ({
          id: faker.datatype.uuid(),
          name: 'Morning',
          createdAt: faker.date.past().toISOString(),
          image: `/src/assets/m00${idx + 1}.jpg`,
        })),
      ),
    );
  }),
];

export default mealHandlers;
