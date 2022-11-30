import React from 'react';
import './CardMyGroup.css';
import { Link } from 'react-router-dom';
//ant design
import { Card, Avatar } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const CardMyGroup = () => {
    return (
        <>
            <div className='card'>
                <Card bodyStyle={{ width: '180px', height: '120px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div className='card-action'>
                        <DeleteOutlined />
                    </div>
                    <div className='card-name'>
                        <h3>Name</h3>
                    </div>
                    <div className='card-title'>
                        <p>sub title</p>
                    </div>
                </Card>
            </div>
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