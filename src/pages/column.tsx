import { useQuery } from 'react-query';

import Button from '@/components/button';
import ColumnItem from '@/components/column/column-item';
import RecommendedItems from '@/components/column/recommended-items';
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
        <RecommendedItems />
        <div className="grid grid-cols-4 gap-2 mt-14">
          {columns?.map((column: ColumnModel) => (
            <ColumnItem column={column} key={column.id} />
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
