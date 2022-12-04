import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './TodoList.css';
import { TaskInterface } from '../../models/ITask';
import ItemList from './ItemList';
import { getTaskGroupByGid } from '../functions/task';
//ant design
import { Button, Col, Row } from 'antd';
import { LeftCircleFilled } from '@ant-design/icons';
import { createTask } from '../functions/task';

const TodoList = () => {
    const params = useParams();
    const [task, setTask] = useState<TaskInterface[]>([]);
    const [addTask, setaddTask] = useState<Partial<TaskInterface>>({});
    const editTaskname = localStorage.getItem('editTaskname');
    const editTaskId = localStorage.getItem('editTaskId');
    const userid = localStorage.getItem('user') ;

    const handleInputChange = (event: React.ChangeEvent<{ id?: string; value: any }>) => {
        const name = event.target.id as keyof typeof addTask;
        const { value } = event.target;
        setaddTask({
            ...addTask,
            [name]: value,
        });
    }

    // console.log('params', params);
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
    // console.log('task', task)


        
    const handleSubmit = () => {
        let data = {
            name: addTask.name,
            userId: typeof userid ==="string" ? parseInt(userid):0 ,
            groupId: params.id,
            state: true,
            // groupID: typeof params ==="string" ?parseFloat{params}:0 ,
        }
        createTask(data)
            .then((response) => response.json())
            .then((res) => {
                loadData()
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    }




    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className='container'>
            <Row>
                <Col style={{ marginLeft: "4%", marginTop: "5%" }} xs={2} sm={4} md={6} lg={8} xl={10}>

                    <h3 className='title'>Keynotes files</h3>
                </Col>
                <Col style={{ textAlign: 'right', marginTop: "7%" }} xs={2} sm={4} md={6} lg={8} xl={10}>
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
                            ? <input className='input'
                                id="name"
                                value={addTask.name}
                                type="text"
                                onChange={handleInputChange}>
                            </input>
                            : <input className='input'
                                id="name"
                                value={addTask.name}
                                type="text"
                                onChange={handleInputChange}>
                            </input>}

                        <Button type="primary" size={'large'} onClick={handleSubmit}>
                            Save
                        </Button>

                        <ItemList task={task} loadData={loadData} setTask={setTask} />

                    </div>
                </div>
            </div>
        </div>




    );
}


export default TodoList;

{/* <UserAddOutlined /> */ }