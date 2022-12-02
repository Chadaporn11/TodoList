import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './TodoList.css';
import { TaskInterface } from '../../models/ITask';
import ItemList from './ItemList';
import { getTaskGroupByGid } from '../functions/task';
//ant design
import { Button, Col, Row } from 'antd';
import { LeftCircleFilled } from '@ant-design/icons';


const TodoList = () => {
    const params = useParams();
    const [task, setTask] = useState<TaskInterface[]>([]);
    const editTaskname = localStorage.getItem('editTaskname');
    const editTaskId = localStorage.getItem('editTaskId');


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
    console.log('task', task)

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
                    <Link to='/'>
                        <LeftCircleFilled style={{ fontSize: '40px', color: '#08c' }} />

                    </Link>
                </Col>
            </Row>
            <div className='container-list'>
                <div>
                    <h3>To Do List</h3>
                    <div className='item-save'>
                        {!editTaskname || !editTaskId
                            ? <input
                                id="name"
                                value="name"
                                type="text">
                            </input>
                            : <input
                                id="name"
                                value={editTaskname}
                                type="text">
                            </input>}

                        <Button type="primary" size={'large'}>
                            Save
                        </Button>

                        <ItemList task={task} loadData={loadData} />

                    </div>
                </div>
            </div>
        </div>




    );
}


export default TodoList;

{/* <UserAddOutlined /> */ }