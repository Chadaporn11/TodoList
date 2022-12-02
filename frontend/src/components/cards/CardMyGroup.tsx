import React, { useEffect } from 'react';
import './CardMyGroup.css';
import { Link } from 'react-router-dom';
//models
import { GroupInterface } from '../../models/IGroup';
//functions
import { deleteGroup, grouplistbyId } from '../functions/group';
//ant design
import { Card, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
const CardMyGroup = () => {
    const [Group, setGroup] = React.useState<GroupInterface[]>([]);

    const handleRemoveGroup = (gid: number) => {
        console.log('gid', gid)
        deleteGroup(gid)
        .then((response) => response.json())
        .then((res)=> {
            console.log(res)
            loadData()
        }).catch((err)=>{
            console.log(err)
        })

    }
    const loadData = () => {

        const uid = localStorage.getItem('user');
        grouplistbyId(uid)
            .then((response) => response.json())
            .then((res) => {
                setGroup(res)
            }).catch((err) => {
                console.log(err)
            });

    }
    console.log('group list', Group)

    useEffect(() => {
        loadData()

    }, []);

    return (
        <>
            <div className='container-list'>
                <List
                    grid={{ gutter: 16 }}
                    dataSource={Group}
                    renderItem={(item) => (
                        <List.Item>
                            <Card>
                                <div className='card-action'>
                                    <DeleteOutlined onClick={()=>handleRemoveGroup(item.id)}/>
                                </div>
                                <Link to={`/todolist/${item.id}`}>
                                    <div className='card-name'>
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div className='card-title'>
                                        <p>{12}</p>
                                    </div>
                                </Link>

                            </Card>



                        </List.Item>

                    )}


                />

                {/* <div className='box'></div> */}
                {/* <Link to='/add-group'>
                    <Card >
                        <div className='card-action-btn'>
                            <PlusOutlined />
                        </div>
                    </Card>
                </Link> */}
            </div>
        </>
    )
}
export default CardMyGroup

//bodyStyle={{ width: '180px', height: '120px', display: 'flex', alignItems: 'center' }}

// bodyStyle={{ width: '180px', height: '120px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}