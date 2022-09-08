import React, { useState } from 'react';
import { Layout, Slider, Button } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

import './App.less';
import Carousel from './components/Carousel';
import Grid from './components/Grid';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [showGridView, toggleGridView] = useState(false);
  const [rotation, setRotation] = useState(0);

  const onChange = (value: number) => {
    setRotation(value * -3.6);
  };

  const onViewChange = () => {
    toggleGridView((prev) => !prev);
  };

  return (
    <Layout className='Layout'>
      <Header className='Header'>
        <Button icon={<AppstoreOutlined />} onClick={onViewChange}></Button>
      </Header>

      {showGridView ? (
        <Grid />
      ) : (
        <>
          <Content className='Content'>
            <Carousel rotation={rotation} isTranparent />
          </Content>

          <Footer className='Footer'>
            <Slider defaultValue={rotation} onChange={onChange} />
          </Footer>
        </>
      )}
    </Layout>
  );
};

export default App;
