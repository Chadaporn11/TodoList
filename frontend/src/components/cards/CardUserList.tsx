import React from 'react';
import './CardUserList.css';
import { Card, Row, Col } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';


const CardUserList = () => {

    return (
        <>
            <Card bodyStyle={{ width: '1100px', height: '80px', display: 'flex', alignItems: 'center' }}>
                <div className='card-img'>
                    <Avatar
                        shape="square"
                        size={55}
                        icon={<UserOutlined />} />

                </div>
                <div className='card-name'>
                    <h3>Name</h3>
                </div>
                <div className='card-title'>
                    <p>card title</p>
                </div>
                <div className='card-action'>
                    <EditOutlined />
                    <DeleteOutlined />
                </div>

            </Card>
            
            <br></br>
            <Card bodyStyle={{ width: '1100px', height: '80px', display: 'flex', alignItems: 'center' }}>
                <div className='card-img'>
                    <Avatar
                        shape="square"
                        size={55}
                        icon={<UserOutlined />} />

                </div>
                <div className='card-name'>
                    <h3>Name</h3>
                </div>
                <div className='card-title'>
                    <p>card title</p>
                </div>
                <div className='card-action'>
                    <EditOutlined />
                    <DeleteOutlined />
                </div>

            </Card>
            
        </>
    )
}

export default CardUserList