import { Breadcrumb, Card, Layout, Typography } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

type BreadCrubProp = { 
    breadcrumbs?: [string, string][], 
    currentpage: string
};

export default function LayoutSkeleton({ breadcrumbs=[], currentpage}: BreadCrubProp) {
    
    return (
        <Layout style={{height: '100vh'}}>
          <Header style={{backgroundColor: 'white', display: 'flex',alignItems: 'center'}}>
            <Link to="/" style={{marginRight: '20px'}}>
                <Typography style={{fontSize: '20pt'}}>
                    MichaelLab
                </Typography>
            </Link>
            <NavBar/>
          </Header>
          <Content style={{padding: '0 48px'}}>
            <div style={{height: 'calc(100%)'}}>
              <Breadcrumb style={{ margin: '16px 0'}}>
                <Breadcrumb.Item>
                    <Link to="/">
                        MichaelLab
                    </Link>
                </Breadcrumb.Item>
                {
                    breadcrumbs.map((value: [string, string]) => (
                        <Breadcrumb.Item>
                            <Link to={value[0]}>
                                {value[1]}
                            </Link>
                        </Breadcrumb.Item>
                    ))
                }
                <Breadcrumb.Item>
                    {currentpage}
                </Breadcrumb.Item>
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