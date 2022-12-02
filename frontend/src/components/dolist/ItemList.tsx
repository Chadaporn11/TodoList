import React, { useEffect, useState } from 'react';
import './ItemList.css'
//function
import { deleteTask } from '../functions/task';
//models
import { TaskInterface } from '../../models/ITask';
//ant design
import { Col, Row, Card, List, MenuProps } from 'antd';
import { CheckOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
type ItemListProps = {
    task: TaskInterface[]
    loadData: () => void
}

const ItemList = (props: ItemListProps) => {
    // console.log('props', props)

    const [state, setstate] = React.useState(true)

    const handleClick = (tid: number) => {
        console.log('click',tid)
        console.log('The link was clicked.');
        setstate(!state)
        console.log(state,tid)
    }

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

    const handleEditTask = (item: any) => {
        const name: string = item.name;
        const id: string = item.id;
        // console.log('item',item)
        localStorage.setItem('editTaskId', id)
        localStorage.setItem('editTaskname', name)

    }





    useEffect(() => {

    }, [])

    return (
        <>
            <Card style={{ width: 800 }}>
                <List
                    grid={{
                        lg: 0
                    }}
                    bordered={false}
                    dataSource={props.task}
                    renderItem={(item) => (
                        <List.Item>
                            <Card style={{ backgroundColor: "lightblue", width: 750, marginBottom: "4%", }}>
                                <Row>
                                    <Col style={{ textAlign: 'left' }} span={12}>
                                        <p>{item.name}</p>
                                    </Col>
                                    <Col style={{ textAlign: 'right' }} span={12}>
                                        <button  className='icon'
                                            disabled={false} onClick={() => handleClick(item.id)}>
                                            <CheckOutlined/>
                                        </button>
                                        <button className='icon'
                                            disabled={state} onClick={() => handleRemoveTask(item.id)}>
                                            <EditOutlined/>
                                        </button>
                                        <button className='icon'
                                            disabled={state} onClick={() => handleRemoveTask(item.id)}>
                                            <DeleteOutlined/>
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

