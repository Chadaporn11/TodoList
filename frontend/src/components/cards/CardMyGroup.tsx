import React, { useEffect } from 'react';
import './CardMyGroup.css';
import { Link } from 'react-router-dom';
//ant design
import { Card, Avatar, List } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { GroupInterface } from '../../models/IGroup';
import { getgroup, listbyId } from '../functions/group';
const CardMyGroup = () => {
    const [Group, setGroup] = React.useState<GroupInterface[]>([]);

    const handleRemove = () => {
        console.log('remove')
    }
    const userId = localStorage.getItem('user');
    useEffect(() => {
        listbyId(userId)
        .then((response) => response.json())
        .then((res) => {
            setGroup(res)
            console.log("group res",res)
            if (res) {
                setGroup(res);
            }
          });

    }, []);

    return (
        <>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={Group}
                renderItem={(item) => (
                    <List.Item>
                        <div className='card'>
                            <Card bodyStyle={{ width: '180px', height: '120px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <div className='card-action'>
                                    <DeleteOutlined onClick={handleRemove} />
                                </div>
                                <div className='card-name'>
                                    <h3>Name</h3>
                                </div>
                                <div className='card-title'>
                                    <p>sub title</p>
                                </div>
                            </Card>
                        </div>
                    </List.Item>
                )}
            />
            <div className="addcard">
                <Link to='/add-group'>
                    <Card bodyStyle={{ width: '180px', height: '120px', display: 'flex', alignItems: 'center' }}>
                        <div className='card-action-btn'>
                            <PlusOutlined />
                        </div>
                    </Card>
                </Link>

            </div>
        </>

    )
}

export default CardMyGroup