import { SettingOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import React, { PropsWithChildren, useState } from 'react';

const App: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        icon={<SettingOutlined />}
        onClick={showDrawer}
        style={{ background: 'transparent', zIndex: 10 }}
      />

      <Drawer
        title='Config'
        placement='left'
        closable={false}
        onClose={onClose}
        open={open}
        key='top'
      >
        {children}
      </Drawer>
    </>
  );
};

export default App;
