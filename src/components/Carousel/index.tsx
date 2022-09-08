import React from 'react';
import CSS3DCarousel from 'react3dcsscarousel';

import Cell from '../Cell';
import { ITEMS } from '../../config';

type Props = {
  rotation?: number;
  isTranparent?: boolean;
};

const App: React.FC<Props> = ({
  rotation = 0,
  isTranparent = false,
}: Props) => {
  return (
    <CSS3DCarousel
      itemWidth={300}
      itemHeight={400}
      itemPerspective={1000}
      activeIndex={0}
      rotate={rotation}
    >
      {ITEMS.map(({ id, image }) => (
        <div key={id}>
          <Cell
            title={id}
            image={image}
            style={isTranparent ? { backgroundColor: 'rgba(0,0,0,0.06)' } : {}}
          />
        </div>
      ))}
    </CSS3DCarousel>
  );
};

export default App;
