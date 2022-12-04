import React, { useEffect, useState } from 'react';
import CardMyGroup from '../cards/CardMyGroup';
import './MyGroup.css';
//ant design
import { Button, Form, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { GroupInterface } from '../../models/IGroup';
import { grouplistbyId, searchbyid } from '../functions/group';
const MyGroup = () => {

    const [Group, setGroup] = useState<GroupInterface[]>([]);
    const [searchGroup, setsearchGroup] = useState<Partial<GroupInterface>>({});
    
    // const [option,setoption] = React.useState(Group)
    const userId = localStorage.getItem('user');

    const handleInputChange = (event: React.ChangeEvent<{ id?: string; value: any }>) => {
        const id = event.target.id as keyof typeof searchGroup;
        const { value } = event.target;
        setsearchGroup({ ...searchGroup, [id]: value });
    };
    console.log('chang',searchGroup)

    const loadData = () => {

        grouplistbyId(userId)
            .then((response) => response.json())
            .then((res) => {
                if (res) {
                    setGroup(res);
                    console.log(res);
                }
            });
    }


    return (
        <div className='mygroup-container'>
            <div className="mygroup-search">
                <Form>
                    <Form.Item>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="search"
                            value={searchGroup.name}
                            onChange={handleInputChange}
                            prefix={<SearchOutlined />}
                        />

                    </Form.Item>
                </Form>
            </div>
            <div className="mygroup-content">
                <h2 className='title'>My Group</h2>
            </div>

            <CardMyGroup searchGroup={searchGroup} setGroup={setGroup} Group={Group} loadData={loadData}/>





        </div>
    )
}

export default MyGroup