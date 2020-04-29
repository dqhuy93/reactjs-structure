import React, { Suspense } from 'react';
// import HeaderComponent from '../components/header';
// import SideBar from '../components/sidebar/SideBar';
import { Layout, Spin } from 'antd';

const { Content, Footer } = Layout;

export const PrivateLayout = props => {
  return (
    <Layout style={{ minHeight: '100vh' }} className="app-layout">
      {/* <SideBar /> */}
      <Layout>
        {/* <HeaderComponent /> */}
        <Content style={{ margin: '15px' }}>
          <Suspense
            fallback={
              <Spin>
                <div className="is-spining" />
              </Spin>
            }
          >
            <div className="main-content">{props.children}</div>
          </Suspense>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2020 ABC</Footer>
      </Layout>
    </Layout>
  );
};
