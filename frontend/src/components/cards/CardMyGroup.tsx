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
    const Userid = localStorage.getItem("user")

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
        <div className='container-list'>
            <List
                grid={{ gutter: 16}}
                dataSource={Group}
                renderItem={(item) => (
                    <List.Item>
                            <Card >
                                <div className='card-action'>
                                    <DeleteOutlined onClick={handleRemove} />
                                </div>
                                <div className='card-name'>
                                    <h3>{item.name}</h3>
                                </div>
                                <div className='card-title'>
                                    <p>{12}</p>
                                </div>
                            </Card>
                            
                 
                    </List.Item>
                    
                )}
            
                
            />
                <div className='box'></div>
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