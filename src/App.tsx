import React, { useState } from 'react';
import { Layout, Slider, Button } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import {
  red,
  volcano,
  gold,
  yellow,
  lime,
  green,
  cyan,
  blue,
  geekblue,
  purple,
  magenta,
  grey,
} from '@ant-design/colors';

import './App.less';

import Carousel from './components/Carousel';
import Grid from './components/Grid';
import Drawer from './components/Drawer';
import Form from './components/Form';

const { Header, Content, Footer } = Layout;

const allColors = [
  ...red,
  ...volcano,
  ...gold,
  ...yellow,
  ...lime,
  ...green,
  ...cyan,
  ...blue,
  ...geekblue,
  ...purple,
  ...magenta,
  ...grey,
];

const App: React.FC = () => {
  const [showCarouselView, toggleCarouselView] = useState(true);
  const [showTransparent, toggleTransparent] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [width, setWidth] = useState('400px');
  const [height, setHeight] = useState('500px');
  const [perspective, setPerspective] = useState('2000px');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const onChange = (value: number) => {
    setRotation(value * -3.6);
  };

  const onViewChange = () => {
    toggleCarouselView((prev) => !prev);
  };

  const onFinish = (values: any) => {
    setWidth(`${values.width.number}${values.width.unit}`);
    setHeight(`${values.height.number}${values.height.unit}`);
    setPerspective(`${values.perspective.number}${values.perspective.unit}`);
  };

  const onRandomBg = () => {
    const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
    setBackgroundColor(randomColor);
  };

  const onTransparansy = () => {
    toggleTransparent((prev) => !prev);
  };

  // TODO: ADD MESSAGE WITH KEYS AND SLIDER INFO
  // AND KEY SUPPORT OF COURSE

  return (
    <Layout className='Layout' style={{ backgroundColor }}>
      <Header className='Header' style={{ backgroundColor }}>
        <Drawer>
          <Form
            onRandomBg={onRandomBg}
            onTransparansy={onTransparansy}
            onFinish={onFinish}
          />
        </Drawer>

        <Button
          style={{ background: 'transparent' }}
          icon={<AppstoreOutlined />}
          onClick={onViewChange}
        />
      </Header>

      {showCarouselView ? (
        <>
          <Content className='Content' style={{ backgroundColor }}>
            <Carousel
              width={width}
              height={height}
              perspective={perspective}
              rotation={rotation}
              isTranparent={showTransparent}
            />
          </Content>

          <Footer className='Footer' style={{ backgroundColor }}>
            <Slider
              defaultValue={rotation}
              tooltip={{
                formatter: () => `${Math.round(-rotation)}°`,
              }}
              onChange={onChange}
            />
          </Footer>
        </>
      ) : (
        <Grid style={{ backgroundColor }} />
      )}
    </Layout>
  );
};

export default App;
