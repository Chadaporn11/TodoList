import React, { useEffect, useState } from 'react';
import './CardUserList.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
//function
import { getUserlist, removeUser } from '../functions/user';
//models
import { userInterface } from '../../models/IUser';

//ant design
import { Card, Row, Col, List } from 'antd';
import { EditOutlined, DeleteOutlined,UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const CardUserList = () => {

    const [Users, setUsers] = useState<userInterface[]>([]);
    const navigate = useNavigate();



    const loadData = async () => {
        const token = localStorage.getItem('access_token')
        getUserlist(token)
            .then((response) => response.json())
            .then((res)=> {
                    setUsers(res);
                    console.log(res);
                
            }).catch((err) => {
                toast.error(err);
            });
    };

    const handleRemove = (item: any) => {
        const id = item.id
        const token = localStorage.getItem('access_token')
        console.log(token)
        removeUser(token, id)
            .then((response) => response.json())
            .then((res) => {
                toast.success(`Delete Success`);
                console.log(res)
                loadData();

            }).catch((err) => {
                toast.error(err);
                console.log(err)

            })

    }
    const handleEdit = (item: any) => {
        const id = item.id
        navigate(`/edit-user/${id}`)
    }


    useEffect(() => {
        loadData();

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
                        <Row>

                            <Col span={24}>
                                <Card bodyStyle={{ width:'1100px',display: 'flex', alignItems: 'center' }}>

                                    <Col span={3}>
                                        <div className='card-img'>
                                            {item.img === "" || item.img === "string"
                                                ? <Avatar shape="square" size={90} icon={<UserOutlined />} />
                                                // : <img src={item.img} alt="avatar" style={{ width: '90%' ,marginRight: '2%'}} />
                                                :<Avatar shape="square" size={90} src={item.img} />
                                            }
                                        </div>
                                    </Col>

                                    <Col span={10}>
                                  
                                            <p className='username'>{item.username}</p>
                                 
                                    </Col>

                                    <Col span={7}>
                                 
                                            <p className='address'>{item.address}</p>
                                      
                                    </Col>

                                    <Col span={5}>
                                        <div className='card-action'>
                                            <EditOutlined style={{marginRight: '10%'}} onClick={(e) => handleEdit(item)} />  
                                            <DeleteOutlined onClick={(e) => handleRemove(item)} />
                                        </div>
                                    </Col>

                                </Card>
                            </Col>
                        </Row>
                    </List.Item>
                )}
            />
        </>
    )
}

export default CardUserList