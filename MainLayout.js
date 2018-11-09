import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import TimeSheetTable from './TimeSheetTable';
import '../../css/MainLayout.css';

const { Header, Sider, Content, Footer} = Layout;

class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>My Profile</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>TimeSheet</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          <TimeSheetTable>

</TimeSheetTable>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
          TimeSheet application
        </Footer>
        </Layout>
        
      </Layout>
    );
  }
}

export default MainLayout