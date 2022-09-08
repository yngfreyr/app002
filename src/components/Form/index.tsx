import React from 'react';
import { Button, Divider, Form, Switch } from 'antd';

import WeightInput from '../WeightInput';
import HeightInput from '../HeightInput';
import PerspectiveInput from '../PerspectiveInput';

type Props = {
  onFinish: (value: any) => void;
  onRandomBg: () => void;
  onTransparansy: () => void;
};

const App: React.FC<Props> = ({ onFinish, onRandomBg, onTransparansy }) => {
  const checkNumbers = (_: any, value: { number: number }) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Number must be greater than zero!'));
  };

  return (
    <Form
      name='config_form'
      layout='vertical'
      onFinish={onFinish}
      initialValues={{
        width: {
          number: 0,
          unit: 'px',
        },
        height: {
          number: 0,
          unit: 'px',
        },
        perspective: {
          number: 0,
          unit: 'px',
        },
      }}
    >
      <Form.Item
        name='width'
        label='Width'
        rules={[{ validator: checkNumbers }]}
      >
        <WeightInput />
      </Form.Item>

      <Form.Item
        name='height'
        label='Height'
        rules={[{ validator: checkNumbers }]}
      >
        <HeightInput />
      </Form.Item>

      <Form.Item
        name='perspective'
        label='Perspective'
        rules={[{ validator: checkNumbers }]}
      >
        <PerspectiveInput />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>

      <Divider />

      <Form.Item label='Glassy' valuePropName='checked'>
        <Switch onChange={onTransparansy} />
      </Form.Item>

      <Form.Item>
        <Button type='ghost' onClick={onRandomBg}>
          Change scene color
        </Button>
      </Form.Item>

      <Divider />
    </Form>
  );
};

export default App;
