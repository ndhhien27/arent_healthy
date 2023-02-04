import { faker } from '@faker-js/faker';
import { rest } from 'msw';

import { API_URL } from '@/services/constant';

const columnHandlers = [
  rest.get(`${API_URL}/columns`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        Array.from({ length: 8 }).map((_, idx) => ({
          id: faker.datatype.uuid(),
          description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
          tags: ['魚料理', '和食', 'DHA'],
          image: `/src/assets/column-${idx + 1}.jpg`,
          createdAt: faker.date.past().toISOString(),
        })),
      ),
    );
  }),
];

export default columnHandlers;
