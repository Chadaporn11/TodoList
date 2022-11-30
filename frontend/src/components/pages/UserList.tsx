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
        <div className='userlist-container'>
            <div className='userlist-menu'>
                <Menubar />
            </div>
            <div className='userlist-content'>
                <Row>
                    <Col style={{ textAlign: 'left' }} span={12}>
                        Home
                    </Col>
                    <Col style={{ textAlign: 'left' }} span={12}>
                        Home
                    </Col>
                </Row>
                <div className='userlist-header'>
                    <div className='userlist-title'>
                        <h2 className='title'>User</h2>
                    </div>
                    <div className='userlist-button'>
                        <Button type="primary" block>
                            <PlusOutlined /> Add User
                        </Button>

                    </div>
                </div>
            </div>

        </div>

        /*    <Row>
                <Col style={{textAlign:'left'}} span={12}>
                    Home
                </Col>
                <Col style={{textAlign:'left'}} span={12}>
                    Home
                </Col>
            </Row>
        </>*/


    )
}

export default UserList;