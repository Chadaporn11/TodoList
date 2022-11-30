import React from 'react';
//ant design
import { Form, Input, Row, Button, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const MyGroup = () => {
    return (
        <div className='mygroup-container'>
            <Row>
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


            </Row>
            <Row>

            </Row>


        </div>
    )
}

export default MyGroup