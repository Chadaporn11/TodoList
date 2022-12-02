import React, { useEffect, useState } from 'react';
import './ItemList.css'
//function
import { deleteTask } from '../functions/task';
//models
import { TaskInterface } from '../../models/ITask';
//ant design
import { Col, Row, Card, List } from 'antd';
import { CheckOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
type ItemListProps = {
    taskitem: TaskInterface[]
    loadData: () => void
    handleChangeInput: (event: React.ChangeEvent<{
        id?: string | undefined;
        value: any;
    }>) => void
    setTaskitem: React.Dispatch<React.SetStateAction<TaskInterface[]>>
    setItemlist: React.Dispatch<React.SetStateAction<TaskInterface[]>>
    itemlist: TaskInterface[]
}

const ItemList = (props: ItemListProps) => {
    const { taskitem, handleChangeInput, setTaskitem, setItemlist, itemlist } = props;
    console.log('props', props)
    const handleRemoveTask = (tid: number) => {
        console.log('tid', tid)
        const token = localStorage.getItem('access_token')
        deleteTask(token, tid)
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                //window.location.reload()
                props.loadData()

            }).catch((err) => {
                console.log(err);
            })
    }




    console.log('itemlist', itemlist)

    const handleEditTask = (item: any) => {
        const name: string = item.name;
        const id: string = item.id;
        console.log('item', item)
        setItemlist({ ...item })

    }
    return (
        <>
            <Card style={{ width: 800 }}>
                <List
                    grid={{
                        lg: 0
                    }}
                    bordered={false}
                    dataSource={taskitem}
                    renderItem={(item) => (
                        <List.Item>
                            <Card style={{ backgroundColor: "lightblue", width: 750, marginBottom: "4%", }}>
                                <Row>
                                    <Col style={{ textAlign: 'left' }} span={12}>
                                        <p>{item.name}</p>
                                    </Col>
                                    <Col style={{ textAlign: 'right' }} span={12}>

                                        <CheckOutlined className='icon' />
                                        <EditOutlined className='icon' onClick={() => handleEditTask(item)} />
                                        <DeleteOutlined onClick={() => handleRemoveTask(item.id)} />

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

