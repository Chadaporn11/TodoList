import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../dolist/ItemList';
import './AddGroup.css';
//ant design
import { Button, Input, Row } from 'antd';
import { LeftCircleFilled } from '@ant-design/icons';
import { GroupInterface } from '../../models/IGroup';
import { creategroup } from '../functions/group';

const AddGroup = () => {

    const [Group, setGroup] = useState<Partial<GroupInterface>>({});

    const handleInputChange = (

        event: React.ChangeEvent<{ id?: string; value: any }>

    ) => {

        const id = event.target.id as keyof typeof Group;

        const { value } = event.target;

        setGroup({ ...Group, [id]: value });

    };



    // console.log(localStorage.getItem("user"))

    function submit() {

        const user = localStorage.getItem("user")
        let data = {
            name: Group.name,
            user: user,
        };

        console.log(data)


        const requestOptionsPost = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        };
        console.log(requestOptionsPost.body)

        fetch("http://localhost:5000/group/createGroup", requestOptionsPost)

            .then((response) => response.json())
            .then((res) => {
                if (res) {
                    console.log(res)
                    // alert("Add Group Success")
                } else {
                    console.log(res)
                    alert("Add Group fail")
                }
            });

    }



    // const handleInputChange = (event: React.ChangeEvent<{ id?: string; value: any }>) => {
    //     const name = event.target.id as keyof typeof Group;
    //     const { value } = event.target;
    //     setGroup({
    //         ...Group,
    //         [name]: value,
    //     });
    // }

    // const handleSubmit = () => {
    //     let data = {
    //         name: Group.name,
    //         userID: Group.userID
    //     }
    //     creategroup(data)
    //         .then((response) => response.json())
    //         .then((res) => {
    //             console.log(res)
    //             alert("Add Group Success")
    //         }).catch((err) => {
    //             console.log(err)
    //             alert("Add Group Fail")
    //         })
    // }

    console.log(Group);

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
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={Group.name}
                            onChange={handleInputChange}
                            style={{ marginLeft: "4%" }}
                            placeholder=" Memes" />
                    </div>
                    <div className="addgroup-content-btn">
                        <Button onClick={submit} type="primary" block>
                            Save
                        </Button>
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default AddGroup;