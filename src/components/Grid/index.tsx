import { Card, Image } from 'antd';
import React from 'react';

import { ITEMS } from '../../config';

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};

const App: React.FC = () => (
  <Card>
    {ITEMS.map((item) => (
      <Card.Grid key={item.id} style={gridStyle}>
        <Image src={item.image} preview={false} />
      </Card.Grid>
    ))}
  </Card>
);

export default App;
