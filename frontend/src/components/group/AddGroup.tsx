import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../dolist/ItemList';
import './AddGroup.css';
//ant design
import { Button, Input, Row } from 'antd';
import { LeftCircleFilled } from '@ant-design/icons';

const AddGroup = () => {
    return (
        <div className='addgroup-container'>
            <Row>
                <div className='addgroup-btn-back'>
                    <Link to='/my-group'>
                        <LeftCircleFilled style={{ fontSize: '40px', color: '#08c' }} />
                    </Link>
                </div>
            </Row>
            <Row>
                <div className='addgroup-header'>
                    <h2 className='title'>Add Group</h2>
                </div>

            </Row>
            <Row>
                <div className='addgroup-content'>
                    <div className="addgroup-content-input">
                        <Input placeholder=" Memes" />
                    </div>
                    <div className="addgroup-content-btn">
                        <Button type="primary" block>
                            Save
                        </Button>
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default AddGroup;