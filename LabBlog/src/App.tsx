import { Breadcrumb, Card, Layout, Typography } from 'antd';
import './App.css'
import NavBar from './components/NavBar';
import { Content, Footer, Header } from 'antd/es/layout/layout';


function App() {

  return (
    <Layout style={{height: '100vh'}}>
      <Header style={{backgroundColor: 'white', display: 'flex',alignItems: 'center'}}>
        <Typography style={{fontSize: '20pt', marginRight: '20px'}}>
          MichaelLab
        </Typography>
        <NavBar/>
      </Header>
      <Content style={{padding: '0 48px'}}>
        <div style={{height: 'calc(100%)'}}>
          <Breadcrumb style={{ margin: '16px 0'}}>
            <Breadcrumb.Item>About</Breadcrumb.Item>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <Card style={{height: 'calc(100% - 54px)'}}>
            Some content i dont have yet
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center'}}>
        <Typography>
          Made by Michael Anderson, 2025. Check out the Source Code on <a href="https://github.com/anderm18/MichaelLab">GitHub</a>
        </Typography>
      </Footer>
      
    </Layout>
  )
}

export default App;
