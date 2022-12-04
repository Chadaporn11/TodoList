import React, { useEffect } from 'react';
import './CardMyGroup.css';
import { Link } from 'react-router-dom';
//models
import { GroupInterface } from '../../models/IGroup';
//functions
import { deleteGroup, grouplistbyId, searchbyid } from '../functions/group';
//ant design
import { Card, List } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { group } from 'console';
type CardMyGroupProps = {
    searchGroup: Partial<GroupInterface>
    Group: GroupInterface[]
    setGroup: React.Dispatch<React.SetStateAction<GroupInterface[]>>
    loadData: () => void
    
}

const CardMyGroup = (props: CardMyGroupProps) => {
    const { searchGroup, setGroup, Group, loadData } = props;
    const userId = localStorage.getItem('user');
    const text = searchGroup.name
    


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

    console.log('group list', Group)


    //search
    useEffect(() => {

        const delay = setTimeout(() => {
            fetchDataFilter(text);
            if (!text) {
                loadData();
            }
        },)
        return () => clearTimeout(delay)
    }, [text]);

    //Filter
    const fetchDataFilter = (name: any) => {
        searchbyid(userId, name)
            .then((response) => response.json())
            .then((res) => {
                if (res) {
                    setGroup(res);
                    console.log("search res", res)
                }
            });

    }

    return (
        <>
            <div className="site-card-wrapper">

                <Row gutter={16}>
                    {Group.map((item) => (
                        <>
                            <Col span={4}>
                                <Card className='box' bordered={false}>
                                    <div className='card-action'>
                                        <DeleteOutlined onClick={() => handleRemoveGroup(item.id)} />
                                    </div>
                                    <Link to={`/todolist/${item.id}`}>
                                        <div className='card-name'>
                                            <p className='name-font'>{item.name}</p>
                                        </div>
                                        <div className='task-title'>
                                            <p className='task-font'>{item.tasks.length} List</p>
                                        </div>
                                    </Link>
                                </Card>
                            </Col>

                        </>
                    ))}
                    <Col span={4}>
                        <Link to='/add-group'>
                            <Card className='box-add' bordered={false} >
                                <PlusOutlined />
                            </Card>
                        </Link>
                    </Col>

                </Row>

            </div>



        </>
    )
}
export default CardMyGroup