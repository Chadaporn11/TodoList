import React, { useEffect, useState } from 'react';
import './CardUserList.css';
import { Card, Row, Col, List } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { userInterface } from '../../models/IUser';
const CardUserList = () => {

    const [Users, setUsers] = useState<userInterface[]>([]);

    const apiUrl = "http://localhost:5000";

    const requestOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
        },
    };

    const getUser = async () => {
        fetch("http://localhost:5000/users/listUsers", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                if (res) {
                    setUsers(res);
                    console.log(res);
                } else {
                    console.log('else')
                }
            });
    };

    useEffect(() => {
        getUser();

    }, []);

    return (
        <>
            <List
                grid={{
               
                    lg: 0,
               
                }}
                bordered={false}
                dataSource={Users}
                renderItem={(item) => (
                    <List.Item>
                        <Card bodyStyle={{ width: '1100px', height: '80px', display: 'flex', alignItems: 'center' }}>
                            <div className='card-img'>
                                <Avatar
                                    shape="square"
                                    size={55}
                                    icon={<UserOutlined />} />

                            </div>
                            <div className='card-name'>
                                <h3>{item.username}</h3>
                            </div>
                            <div className='card-title'>
                                <p>{item.address}</p>
                            </div>
                            <div className='card-action'>
                                <EditOutlined />
                                <DeleteOutlined />
                            </div>

                        </Card>
                    </List.Item>
                )}
            />




        </>
    )
}

export default CardUserList