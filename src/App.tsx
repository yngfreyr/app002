import React, { useState } from 'react';
import { Layout, Slider, Button } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

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

  // TODO: ADD MESSAGE WITH KEYS AND SLIDER INFO
  // TODO: ADD CUSTOMISE PROPS FORM
  // TODO: ADD SLIDER MARKS
  // ADD SWITCH RAGE MODE

  return (
    <Layout className='Layout'>
      <Header className='Header'>
        <Button
          type='link'
          icon={<AppstoreOutlined />}
          onClick={onViewChange}
        ></Button>

        <Button
          type='link'
          icon={<SettingOutlined />}
          onClick={() => {}}
        ></Button>
      </Header>

      {showGridView ? (
        <Grid />
      ) : (
        <>
          <Content className='Content'>
            <Carousel rotation={rotation} isTranparent />
          </Content>

          <Footer className='Footer'>
            <Slider
              defaultValue={rotation}
              tooltip={{
                formatter: () => `${Math.round(-rotation)}°`,
              }}
              onChange={onChange}
            />
          </Footer>
        </>
      )}
    </Layout>
  );
};

export default App;
