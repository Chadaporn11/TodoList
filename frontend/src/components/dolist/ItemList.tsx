import React,{ useState } from 'react';
import './ItemList.css'
//ant design
import { Col, Row, Card } from 'antd';
import { CheckOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

const ItemList = () => {

    return (
        <Card style={{ width: 800 }}>
            <Card style={{ backgroundColor: "lightblue", width: 750, marginBottom: "4%",}}>
                <Row>
                    <Col style={{textAlign:'left'}} span={12}>
                    <p>item1</p>
                    </Col>
                    <Col style={{textAlign:'right'}} span={12}>
                        
                        <CheckOutlined className='icon'></CheckOutlined>
                        <EditOutlined className='icon'></EditOutlined>
                        <DeleteOutlined ></DeleteOutlined>
                        
                    
                    </Col>
                </Row>
            </Card>
            <Card style={{ backgroundColor: "lightblue", width: 750, marginBottom: "4%",}}>
                <Row>
                    <Col style={{textAlign:'left'}} span={12}>
                    <p>item1</p>
                    </Col>
                    <Col style={{textAlign:'right'}} span={12}>
                        
                        <CheckOutlined className='icon'></CheckOutlined>
                        <EditOutlined className='icon'></EditOutlined>
                        <DeleteOutlined ></DeleteOutlined>
                        
                    
                    </Col>
                </Row>
            </Card>
        </Card>




    );
}

export default ItemList;

