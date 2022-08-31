import React, { useState } from 'react';

import {
  MinusOutlined,
  PlusOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';

import {
  Col,
  Row,
  Statistic,
  Image,
  Empty,
  Button,
  Progress,
  Skeleton,
  Typography,
} from 'antd';

// @ts-ignore
import CSS3DCarousel from 'react3dcsscarousel';

import './App.less';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

function App() {
  const onFinish = () => {
    console.log('finished!');
  };

  const onChange = (val: any) => {
    if (4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!');
    }
  };

  const [percent, setPercent] = useState(0);

  const increase = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };

  const decline = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  const [activeSlide, setActiveSlide] = useState(0);

  const onArrowLeftClick = () => {
    setActiveSlide((slide) => slide - 1);
  };

  const onArrowRightClick = () => {
    setActiveSlide((slide) => slide + 1);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Button
          style={{ marginRight: 4 }}
          type='primary'
          icon={<ArrowLeftOutlined />}
          size='large'
          onClick={onArrowLeftClick}
        />

        <Button
          type='primary'
          icon={<ArrowRightOutlined />}
          size='large'
          onClick={onArrowRightClick}
        />
      </header>

      <CSS3DCarousel
        itemWidth='40vw'
        itemHeight='50vh'
        itemPerspective='2000px'
        activeIndex={activeSlide}
      >
        <div className='cell' key={1}>
          <Image.PreviewGroup>
            <Image
              width={200}
              src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
            />
            <Image
              width={200}
              src='https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
            />
          </Image.PreviewGroup>
        </div>

        <div className='cell' key={2}>
          <Empty />
        </div>

        <div className='cell' key={3}>
          <Row gutter={16}>
            <Col span={12}>
              <Countdown
                title='Countdown'
                value={deadline}
                onFinish={onFinish}
              />
            </Col>
            <Col span={12}>
              <Countdown
                title='Million Seconds'
                value={deadline}
                format='HH:mm:ss:SSS'
              />
            </Col>
            <Col span={24} style={{ marginTop: 32 }}>
              <Countdown
                title='Day Level'
                value={deadline}
                format='D 天 H 时 m 分 s 秒'
              />
            </Col>
            <Col span={12}>
              <Countdown
                title='Countdown'
                value={Date.now() + 10 * 1000}
                onChange={onChange}
              />
            </Col>
          </Row>
        </div>

        <div className='cell' key={4}>
          <Progress type='circle' percent={percent} />
          <Button.Group>
            <Button onClick={decline} icon={<MinusOutlined />} />
            <Button onClick={increase} icon={<PlusOutlined />} />
          </Button.Group>
        </div>

        <div className='cell' key={5}>
          <Skeleton active />
        </div>

        <div className='cell' key={6}>
          <Typography.Title>
            蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
          </Typography.Title>
        </div>
      </CSS3DCarousel>
    </div>
  );
}

export default App;
