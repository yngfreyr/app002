import { Card, Image } from 'antd';
import React from 'react';

type Props = {
  title?: string;
  image?: string;
  style?: React.CSSProperties;
};

const App: React.FC<Props> = ({
  title = 'Default size card',
  image = '',
  style = {},
}) => (
  <Card
    title={title}
    extra={
      <a
        href='https://www.yeezygap.com'
        rel='noopener noreferrer'
        target='_blank'
      >
        More
      </a>
    }
    style={style}
  >
    {!!image && <Image src={image} />}
  </Card>
);

export default App;
