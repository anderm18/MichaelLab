import { Menu} from 'antd';
import { Link } from 'react-router-dom';


export default function NavBar() {

    return (
        <Menu 
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ flex: 1, minWidth: 0 }}
        >
            <Menu.Item key="1">
                <Link to="/">About</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/api">API</Link>
            </Menu.Item>
        </Menu>
  
    );
}