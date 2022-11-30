import React,{ useState } from 'react';
import './CreateUser.css';
//models type
import { userInterface } from '../../models/IUser';
//ant design
import { 
    LockOutlined, 
    PhoneOutlined, 
    UserAddOutlined, 
    PushpinOutlined, 
    LoadingOutlined 
} from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Upload,
    message,
} from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { Col, Row } from 'antd';

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};


const CreateUser = () => {

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const [user, setUser] = useState<Partial<userInterface>>({});

    const handleChangeImage: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as RcFile, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div style={{ fontSize: 50 }}>
            {loading ? <LoadingOutlined /> : <UserAddOutlined />}
            {/* <div style={{ marginTop: 8 }}>Upload</div> */}
        </div>
    );

    const handleInputChange= (event: React.ChangeEvent<{ id?: string; value: any }>) => {
        console.log(event.target.value)

    }

    return (
        <div className='container'>

            <Row>
                <Col style={{ marginLeft: "4%", marginTop: "5%" }} xs={4} sm={6} md={8} lg={10} xl={12}>
                    <h3>Add User</h3>
                </Col>
            </Row>
            <div className='container-from'>
                <Form
                    name="wrap"
                    labelCol={{ flex: '20px' }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    colon={false}
                >
                    <Form.Item>
                        <Upload
                            name="profile"
                            id='profile'

                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChangeImage}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>

                    <Form.Item label={<UserAddOutlined />} id="use" name="username">
                        <Input 
                        type="text"
                        name="username"
                        id="username"
                        placeholder="user name"
                        value={user.username}
                        onChange={handleInputChange}
                         />
                    </Form.Item>

                    <Form.Item label={<PhoneOutlined />} name="phonenumber">
                        <Input
                        type="text"
                        name="phonenumber"
                        id="phonenumber" 
                        value={user.phonenumber}
                        onChange={handleInputChange}

                        placeholder="Phone Number" />
                    </Form.Item>

                    <Form.Item label={<PushpinOutlined />} name="address">
                        <Input 
                        type="text"
                        name="emailaddress"
                        id="emailaddress" 
                        value={user.emailaddress}
                        onChange={handleInputChange}

                        placeholder="Email Address" />
                    </Form.Item>

                    <Form.Item
                        label={<LockOutlined />}
                        name="password"
                    >
                        <Input.Password 
                        type="text"
                        name="password"
                        id="password" 
                        value={user.password}
                        onChange={handleInputChange}

                        placeholder="password" />
                    </Form.Item>

                    <Form.Item
                        label={<LockOutlined />}
                        name="confirmpassword"
                    >
                        <Input.Password
                        type="text"
                        name="confirmpassword"
                        id="confirmpassword" 
                        value={user.password} 
                        onChange={handleInputChange}

                        placeholder="confirmpassword" />
                    </Form.Item>


                    <Form.Item>
                        <div className='button-size'>
                            <div className='button-cancel'>
                                <Button type="primary" htmlType="submit">
                                    cancel
                                </Button>
                            </div>
                            <div className='button-submit'>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </div>
                        </div>

                    </Form.Item>
                </Form>
            </div>

        </div>

    );
}


export default CreateUser;