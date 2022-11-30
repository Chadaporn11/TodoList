import React from 'react';
import './UserList.css';
import { Link } from 'react-router-dom';
//pages
import CardUserList from '../cards/CardUserList';
//ant design
import { Col, Row, Button, Card } from 'antd';
import { UserOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

const UserList = () => {
    return (
        <div className='userlist-container'>
            <Row>
                <div className='userlist-header'>
                    <div className='userlist-title'>
                        <h2 className='title'>User</h2>
                    </div>
                    <div className='userlist-button'>
                        <Link to='/create-user'>
                            <Button
                                type="primary"
                                block>
                                <PlusOutlined /> Add User
                            </Button>
                        </Link>


                    </div>
                </div>

            </Row>
            <Row>
                <div className='userlist-card'>
                    <CardUserList />
                </div>
            </Row>


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