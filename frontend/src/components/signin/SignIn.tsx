import React, { useState } from 'react';
import './SignIn.css'

//layouts
import Menu from '../layouts/Menubar'

//ant design
import { Button, Form, Input } from "antd";
import type { SizeType } from 'antd/es/config-provider/SizeContext';

const SignIn = () => {
    const [size, setSize] = useState<SizeType>('large');
    const [form] = Form.useForm();

    return (

        <div className='Auth-form-container'>
            <div className='Auth-form-content'>
                <h3 className='Auth-form-title'>LOGIN</h3>
                <h1 className='Auth-form-subtitle'>Welcome Back</h1>
                <Form form={form} layout="vertical">
                    <Form.Item >
                        <p>User Name</p>
                        <Input placeholder="Enter your email address" />
                    </Form.Item>
                    <Form.Item>
                        <p>Password</p>
                        <Input placeholder="Enter your password" />
                    </Form.Item>
                    <Form.Item>
                        <Button className='button-center' type="primary" >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>

    );
}

export default SignIn;