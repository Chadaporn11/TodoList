import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../dolist/ItemList';
import './AddGroup.css';
//ant design
import { Button, Input, Row } from 'antd';
import { LeftCircleFilled } from '@ant-design/icons';
import { GroupInterface } from '../../models/IGroup';
const AddGroup = () => {

    const [Group, setGroup] = React.useState<Partial<GroupInterface>>({});

    const handleInputChange = (

        event: React.ChangeEvent<{ id?: string; value: any }>
    
      ) => {
    
        const id = event.target.id as keyof typeof Group;
    
        const { value } = event.target;
    
        setGroup({ ...Group, [id]: value });

       
        const apiUrl = "http://localhost:8080";

        function submit() {

            let data = {
            
            };
            

        const requestOptionsPost = {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          };
          console.log(apiUrl)
      
          fetch(`${apiUrl}/teacherrecords`, requestOptionsPost)
      
            .then((response) => response.json())
            .then((res) => {
              if (res.data) {
                alert('success')
              } else {
                alert('fail')
              }
            });
      
        }
      
    
      };

    return (
        <div className='addgroup-container'>
            <Row>
                <div className='addgroup-btn-back'>
                    <Link to='/'>
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