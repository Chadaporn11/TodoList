import React, { useEffect, useState } from 'react';
import './Menubar.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { PieChartOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';
import { Layout, MenuProps } from 'antd';
import { Menu, Avatar } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { getUser, getUserlist } from '../functions/user';
import { userInterface } from '../../models/IUser';
import { Image } from 'antd';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const itemsuser: MenuProps['items'] = [

    getItem(<Link to='/'>My ToDo List</Link>, 'mytodolist', <PieChartOutlined />),
];
const itemsadmin: MenuProps['items'] = [

    getItem(<Link to='/'>My ToDo List</Link>, 'mytodolist', <PieChartOutlined />),
    getItem(<Link to='/user-list'>User</Link>, 'user', <UserOutlined />),
];
const itemsend: MenuProps['items'] = [
    getItem('Log out', 'logout', <LoginOutlined />),
];

const Menubar = () => {

    const navigate = useNavigate();
    const loacation = useLocation();

    const [Users, setUsers] = useState('')

    const roles = localStorage.getItem('roles')


    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e.key);
        console.log("useridddddddddddddddddd", Users)
        if (e.key === 'logout') {
            navigate('/')
            localStorage.clear();
            window.location.reload()

        }
    };

    const loadData = async () => {
        const token = localStorage.getItem('access_token')
        const userid = localStorage.getItem('user')
        getUser(token, userid)
            .then((response) => response.json())
            .then((res) => {
                if (res) {
                    setUsers(res.img);

                } else {
                    console.log('else')
                }
            });
    };

    useEffect(() => {
        loadData();

    }, []);




    return (


        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div className='menubar-img'>
                    {!Users
                        ? <Avatar
                            size={140}
                            icon={<UserOutlined />} />
                        : <Avatar
                            size={140}
                            src={Users} />
                    }
                </div >
                {roles === 'user'
                    ? <Menu
                        onClick={onClick}
                        style={{ backgroundColor: '#063970', color: 'white', float: 'inline-start' }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={itemsuser}
                    />
                    : <Menu
                        onClick={onClick}
                        style={{ backgroundColor: '#063970', color: 'white', float: 'inline-start' }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={itemsadmin}
                    />}
                <Menu
                    onClick={onClick}
                    style={{ backgroundColor: '#063970', color: 'white', float: 'inline-end' }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={itemsend}
                />







            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>

            </Layout>
        </Layout>
    )
}

//         <div className='menubar-container'>
//             <div className='menubar-img'>
//                 <Avatar
//                     size={120}
//                     icon={<UserOutlined />} />
//             </div >
//             <div className='menubar-itemtop'>
//                 <div className='item'>
//                     {roles === 'user'
//                         ? <Menu
//                             onClick={onClick}
//                             style={{ backgroundColor: '#063970', color: 'white', float: 'inline-start' }}
//                             defaultSelectedKeys={['1']}
//                             defaultOpenKeys={['sub1']}
//                             mode="inline"
//                             items={itemsuser}
//                         />
//                         : <Menu
//                             onClick={onClick}
//                             style={{ backgroundColor: '#063970', color: 'white', float: 'inline-start' }}
//                             defaultSelectedKeys={['1']}
//                             defaultOpenKeys={['sub1']}
//                             mode="inline"
//                             items={itemsadmin}
//                         />}

//                         </div>
//                         </div>
//                         </div>
//     )
// }

export default Menubar;



// <Layout hasSider>
// <Sider
//     style={{
//         overflow: 'auto',
//         height: '100vh',
//         position: 'fixed',
//         left: 0,
//         top: 0,
//         bottom: 0,
//     }}
// >
//     <div className='menubar-img'>
//         <Avatar
//             size={120}
//             icon={<UserOutlined />} />
//     </div >
//     <Menu onClick={onClick}
//         style={{ backgroundColor: '#063970', color: 'white', float: 'inline-start' }}
//         defaultSelectedKeys={['1']}
//         defaultOpenKeys={['sub1']}
//         mode="inline"
//         items={itemstop} />
//     <div className='menubar-itemend'>
//         <div className='item'>
            // <Menu
            //     onClick={onClick}
            //     style={{ backgroundColor: '#063970', color: 'white', float: 'inline-end' }}
            //     defaultSelectedKeys={['1']}
            //     defaultOpenKeys={['sub1']}
            //     mode="inline"
            //     items={itemsend}
            // />

//         </div>
//     </div>
// </Sider>
// <Layout className="site-layout" style={{ marginLeft: 200 }}>

// </Layout>
// </Layout>