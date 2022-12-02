import React, { useEffect } from 'react';
import './CardMyGroup.css';
import { Link } from 'react-router-dom';
//models
import { GroupInterface } from '../../models/IGroup';
//functions
import { deleteGroup, grouplistbyId } from '../functions/group';
//ant design
import { Card, List } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

const CardMyGroup = () => {
    const [Group, setGroup] = React.useState<GroupInterface[]>([]);

    const handleRemoveGroup = (gid: number) => {
        console.log('gid', gid)
        deleteGroup(gid)
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                loadData()
            }).catch((err) => {
                console.log(err)
            })

    }
    const loadData = () => {

        const uid = localStorage.getItem('user');
        grouplistbyId(uid)
            .then((response) => response.json())
            .then((res) => {
                setGroup(res)
            }).catch((err) => {
                console.log(err)
            });

    }
    console.log('group list', Group)

    useEffect(() => {
        loadData()

    }, []);

    return (
        <>
            <div className="site-card-wrapper">

                <Row gutter={16}>
                    {Group.map((item) => (
                        <>
                            <Col span={6}>
                                <Card className='box' bordered={false}>
                                    <div className='card-action'>
                                        <DeleteOutlined onClick={() => handleRemoveGroup(item.id)} />
                                    </div>
                                    <Link to={`/todolist/${item.id}`}>
                                        <div className='card-name'>
                                            <h3>{item.name}</h3>
                                        </div>
                                        <div className='card-title'>
                                            <p>{12}</p>
                                        </div>
                                    </Link>
                                </Card>
                            </Col>

                        </>
                    ))}
                    <Col span={6}>
                        <Link to='/add-group'>
                            <Card className='box-add' bordered={false} >
                                <PlusOutlined />
                            </Card>
                        </Link>
                    </Col>

                </Row>

            </div>

            {/* <div className='box'></div> */}
            {/* <Link to='/add-group'>
                    <Card >
                        <div className='card-action-btn'>
                            <PlusOutlined />
                        </div>
                    </Card>
                </Link> */}

        </>
    )
}
export default CardMyGroup

//bodyStyle={{ width: '180px', height: '120px', display: 'flex', alignItems: 'center' }}

// bodyStyle={{ width: '180px', height: '120px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}