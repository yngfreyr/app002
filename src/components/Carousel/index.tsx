import React from 'react';
import CSS3DCarousel from 'react3dcsscarousel';

import Cell from '../Cell';
import { ITEMS } from '../../config';

type Props = {
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  perspective?: React.CSSProperties['perspective'];
  rotation?: number;
  isTranparent?: boolean;
};

const App: React.FC<Props> = ({
  width = 400,
  height = 500,
  perspective = 2000,
  rotation = 0,
  isTranparent = false,
}: Props) => {
  return (
    <CSS3DCarousel
      itemWidth={width}
      itemHeight={height}
      itemPerspective={perspective}
      rotate={rotation}
      activeIndex={0}
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
