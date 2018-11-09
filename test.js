import React, { Component } from 'react';
import { Layout } from 'antd';
import TimeSheetTable from '../js/compoenent/TimeSheetTable';
const { Header, Footer, Content  } = Layout;

const style = {
  header: {
    backgroundColor: '#dce1e6',
  }
}
class Test extends Component {
  render() {
    return (
      <div >
        <Layout className="layout">
        
          <Header style={style.header}>
      
        
     
          </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          TimeSheet application
        </Footer>
      </Layout>
      </div>
    );
  }
}

export default Test;
