import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TodoList.css';
import { TaskInterface } from '../../models/ITask';
import ItemList from './ItemList';
import { getTaskGroupByGid } from '../functions/group';
//ant design
import { Button, Col, Row } from 'antd';
import { LeftCircleFilled } from '@ant-design/icons';


const TodoList = () => {
    const params = useParams();
    const [task, setTask] = useState<TaskInterface[]>([]);

    console.log('params', params);
    const loadData = () => {
        getTaskGroupByGid(params.id)
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                setTask(res.data)
            }).catch((err) => {
                console.log(err.response.data);
            })
    }
    console.log('task',task)

    useEffect(() => {
        loadData();

    }, []);

    return (
        <div className='container'>
            <Row>
                <Col style={{ marginLeft: "4%", marginTop: "5%" }} xs={2} sm={4} md={6} lg={8} xl={10}>
                    <h3>Keynotes files</h3>
                </Col>
                <Col style={{ textAlign: 'right', marginRight: "4%", marginTop: "5%" }} xs={2} sm={4} md={6} lg={8} xl={10}>
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

                        <ItemList task={task}/>

                    </div>
                </div>
            </div>
        </div>




    );
}


export default TodoList;

{/* <UserAddOutlined /> */ }