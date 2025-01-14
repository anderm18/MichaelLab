import { Menu} from 'antd';


export default function NavBar() {

    return (
        <Menu 
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={[{key: 1, label: "About"}, {key: 2, label: "Blog"}, {key: 3, label: "API"}]}
            style={{ flex: 1, minWidth: 0 }}
        />
  
    );
}