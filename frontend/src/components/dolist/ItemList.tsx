import React, { useState } from 'react';
import './ItemList.css'
import { TaskInterface } from '../../models/ITask';
//ant design
import { Col, Row, Card, List } from 'antd';
import { CheckOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
type ItemListProps = {
    task: TaskInterface[]
}

const ItemList = (props: ItemListProps) => {
    console.log('props', props)
    return (
        <>
            <Card style={{ width: 800 }}>
                <List
                grid={{
                    lg:0
                }}
                    bordered={false}
                    dataSource={props.task}
                    renderItem={(item) => (
                        <List.Item>
                            <Card style={{ backgroundColor: "lightblue", width: 750, marginBottom: "4%", }}>
                                <Row>
                                    <Col style={{ textAlign: 'left' }} span={12}>
                                        <p>{item.id}</p>
                                    </Col>
                                    <Col style={{ textAlign: 'right' }} span={12}>

                                        <CheckOutlined className='icon'></CheckOutlined>
                                        <EditOutlined className='icon'></EditOutlined>
                                        <DeleteOutlined ></DeleteOutlined>

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

