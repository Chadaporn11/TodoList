import React from 'react';
import CardMyGroup from '../cards/CardMyGroup';
import './MyGroup.css';
//ant design
import { Form, Input, Row, Button, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const MyGroup = () => {
    
    return (
        <div className='mygroup-container'>
            <div className="mygroup-search">
                <Form>
                    <Form.Item>
                        <Input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="search"
                            value='search'
                            prefix={<SearchOutlined />}
                        />

                    </Form.Item>
                </Form>
            </div>
            <div className="mygroup-content">
                <h2 className='title'>My Group</h2>
            </div>
 
                    <CardMyGroup />
     




        </div>
    )
}

export default MyGroup