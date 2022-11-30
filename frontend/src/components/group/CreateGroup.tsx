import React,{ useState } from 'react';
import './CreateGroup.css';
//ant design
import { Button, Col, Row } from 'antd';
import { LeftCircleFilled } from '@ant-design/icons';

const CreateGroup = () => {


    return (
        <div className='container'>
            <Row>
                <Col style={{ marginLeft: "4%", marginTop: "5%" }} xs={2} sm={4} md={6} lg={8} xl={10}>
                    <h3>Add Group</h3>
                </Col>
                <Col style={{ textAlign: 'right', marginRight: "4%", marginTop: "3%" }} xs={2} sm={4} md={6} lg={8} xl={10}>
                <LeftCircleFilled />
                </Col>
            </Row>

            <div>
                 
                    <input type="text" style={{ marginLeft: "4%" }} >
                    </input>
               
                

                <Button style={{ marginLeft: "4%" }} type="primary" size={'large'}>
                    Save
                </Button>


            </div>
        </div>




    );
}

export default CreateGroup;