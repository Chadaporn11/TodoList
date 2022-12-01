import React, { useEffect, useState } from 'react';
import './CardUserList.css';
import { useNavigate } from 'react-router-dom';
//function
import { getUserlist, removeUser } from '../functions/user';
//ant design
import { Card, Row, Col, List } from 'antd';
import { EditOutlined, DeleteOutlined,UserAddOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { userInterface } from '../../models/IUser';
const CardUserList = () => {

    const [Users, setUsers] = useState<userInterface[]>([]);
    const navigate = useNavigate();


    const loadData = async () => {
        const token = localStorage.getItem('access_token')
        getUserlist(token)
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
    const handleRemove = (item: any) => {
        const id = item.id
        const token = localStorage.getItem('access_token')
        console.log(token)
        removeUser(token, id)
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                loadData();

            }).catch((err) => {
                console.log(err)

            })

    }
    const handleEdit = (item:any) => {
        const id = item.id
        localStorage.setItem('edit_user',id)
        navigate('/edit-user')
    }
    

    useEffect(() => {
        loadData();

    }, []);

    return (
        <>
            <List
                grid={{

                    lg: 24,

                }}
                bordered={false}
                dataSource={Users}
                renderItem={(item) => (
                    <List.Item>
                        <Card bodyStyle={{ width: '1100px', height: '80px', display: 'flex', alignItems: 'center' }}>
                            <div className='card-img'>
                            {item.img === null || item.img === "string"
                            ? <UserAddOutlined />
                            : <img src={item.img} alt="avatar" style={{ width: '100%' }} /> 
                            }


                            </div>
                            <div className='card-name'>
                                <h3>{item.username}</h3>
                            </div>
                            <div className='card-title'>
                                <p>{item.address}</p>
                            </div>
                            <div className='card-action'>
                                <EditOutlined onClick={(e) => handleEdit(item)}/>
                                <DeleteOutlined onClick={(e) => handleRemove(item)} />
                            </div>

                        </Card>
                    </List.Item>
                )}
            />
        </>
    )
}

export default CardUserList