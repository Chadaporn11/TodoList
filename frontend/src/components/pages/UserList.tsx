import React from 'react';
import './UserList.css';
import Menubar from '../layouts/Menubar';
import CardUserList from '../cards/CardUserList';
import { Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { Col, Row } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


const UserList = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Menubar />
            <div className='userlist-content' style={{ marginLeft: '25px', marginTop: '40px', padding: '0' }}>
                <div className='userlist-header'>
                    <div className='userlist-title'>
                        <h2 className='title'>User</h2>
                    </div>
                    <div className='userlist-button'>
                        <Button type="primary" block >
                            <PlusOutlined /> Add User
                        </Button>

                    </div>
                </div>
                <div className='userlist-card' >
                    <CardUserList />
                </div>
            </div>

        </div>


    )
}

export default UserList;