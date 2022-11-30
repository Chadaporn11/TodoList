import react from 'react';
import { useState } from 'react';
import './TodoList.css';
import { Button, Card, Col, Row } from 'antd';
import ItemList from './ItemList';
import { LeftCircleFilled } from '@ant-design/icons';


function TodoList() {


    return (
        <div className='container'>
           <Row>
                <Col style={{ marginLeft: "4%", marginTop: "5%" }} xs={2} sm={4} md={6} lg={8} xl={10}>
                    <h3>Keynotes files</h3>
                </Col>
                <Col style={{ textAlign:'right',marginRight: "4%", marginTop: "5%" }} xs={2} sm={4} md={6} lg={8} xl={10}>
                <LeftCircleFilled style={{ fontSize: '30px', color: '#08c' }}></LeftCircleFilled>
                </Col>
            </Row>
            <div className='container-list'>
                <div>
                    <h3>To Do List</h3>
                    <div className='item-save'>
                        <input type="text">
                        </input>
                        <Button type="primary" size={'large'}>
                            Save
                        </Button>
                       
                        <ItemList></ItemList>

                    </div>
                </div>
            </div>
            </div>

  


    );
}


export default TodoList;

{/* <UserAddOutlined /> */ }