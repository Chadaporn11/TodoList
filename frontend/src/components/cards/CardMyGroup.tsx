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
}

const CardMyGroup = (props: CardMyGroupProps) => {
    const { searchGroup } = props;
    const [Group, setGroup] = React.useState<GroupInterface[]>([]);
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

    const loadData = () => {

        const uid = localStorage.getItem('user');
        grouplistbyId(uid)
            .then((response) => response.json())
            .then((res) => {
                setGroup(res)
                console.log(res)
            }).catch((err) => {
                console.log(err)
            });

    }



    console.log('group list', Group)
    useEffect(() => {
        loadData()

    }, []);


    //search
    useEffect(() => {

        const delay = setTimeout(() => {
            fetchDataFilter(text);
            let data = text
            console.log(data)
            // console.log('length',data.length)

            if (!text) {
                loadData();
            }
        }, 300)
        // console.log(delay,'delayyyyyyyyy')
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
    let x = Group.map((x) => x.tasks.name)
    console.log(x,"xxxxxxxxxxxxxxxxxxxxxxxxxxxx")


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
                                            <h3>{item.name}</h3>
                                        </div>
                                        <div className='card-title'>
                                            <p>12</p>
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