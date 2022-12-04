import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemList.css'
//function
import { deleteTask, updateTask } from '../functions/task';
//models
import { TaskInterface } from '../../models/ITask';
//ant design
import { Col, Row, Card, List, MenuProps } from 'antd';
import { CheckOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
type ItemListProps = {
    task: TaskInterface[]
    loadData: () => void
    setTask: React.Dispatch<React.SetStateAction<TaskInterface[]>>
}

const ItemList = (props: ItemListProps) => {


    const params = useParams();
    const { task, loadData, setTask } = props;
    const groupid = params.id;
    const userid = localStorage.getItem('user')
    // console.log('props', props)

    // const [state, setstate] = React.useState()
    //const [states, setstates] = useState<Partial<TaskInterface>>({});

    const handleClick = (item: TaskInterface) => {

        console.log('item click', item)
        const { id, name, state } = item
        const data = {
            id: id,
            name: name,
            userId: typeof userid ==="string" ? parseInt(userid):0,
            groupId: typeof groupid ==="string" ? parseInt(groupid):0,
            state: !state,
        }
        updateTask(data)
            .then((response) => response.json())
            .then((res) => {
                console.log('data', res)
                loadData()

            }).catch((err) => {
                console.log(err)

            })

    }

    // console.log(task, 'teskkkkkkkkkkkkkkkkkkkkkk')

    const handleRemoveTask = (tid: number) => {
        console.log('tid', tid)
        const token = localStorage.getItem('access_token')
        deleteTask(token, tid)
            .then((response) => response.json())
            .then((res) => {
                console.log(res, 'ressssssssssssssss')
                //window.location.reload()
                loadData()

            }).catch((err) => {
                console.log(err);
            })
    }

    const handleEditTask = (item: any) => {
        const name: string = item.name;
        const id: string = item.id;
        // console.log('item',item)
        localStorage.setItem('editTaskId', id)
        localStorage.setItem('editTaskname', name)

    }


    useEffect(() => {
        loadData()

    }, [])

    return (
        <>
            <Card style={{ width: 800 }}>
                <List
                    grid={{
                        lg: 0
                    }}
                    bordered={false}
                    dataSource={task}
                    renderItem={(item, index) => (
                        <List.Item>
                            <Card key={index} style={{ backgroundColor: "lightblue", width: 750, marginBottom: "4%", }}>
                                <Row>
                                    <Col style={{ textAlign: 'left' }} span={12}>
                                        <p>{item.name}</p>
                                    </Col>
                                    <Col style={{ textAlign: 'right' }} span={12}>
                                        <button className='icon'
                                            disabled={false} onClick={() => handleClick(item)}>
                                            <CheckOutlined />
                                        </button>
                                        <button className='icon'
                                            disabled={item.state} onClick={() => handleRemoveTask(item.id)}>
                                            <EditOutlined />
                                        </button>
                                        <button className='icon'
                                            disabled={item.state} onClick={() => handleRemoveTask(item.id)}>
                                            <DeleteOutlined />
                                        </button>



                                    </Col>
                                </Row>
                            </Card>
                        </List.Item>
                    )}
                />
            </Card>

        </>
    );
}

export default ItemList;