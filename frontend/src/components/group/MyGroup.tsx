import React, { useEffect } from 'react';
import CardMyGroup from '../cards/CardMyGroup';
import './MyGroup.css';
//ant design
import { Form, Input} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { GroupInterface } from '../../models/IGroup';
import { grouplistbyId } from '../functions/group';
const MyGroup = () => {
    
    const [Group, setGroup] = React.useState<GroupInterface[]>([]);
    // const [option,setoption] = React.useState(Group)
    const userId = localStorage.getItem('user');
    useEffect(() => {

        grouplistbyId(userId)
            .then((response) => response.json())
            .then((res) => {    
                if (res) {
                    setGroup(res);
                    console.log("group res", res)
                }
            });

    }, []);

    // const search = (serchtext) => {
    //     setoption({
    //         ...Group,
        
    //     })

    return (
        <div className='mygroup-container'>
            <div className="mygroup-search">
                {/* <AutoComplete
                style={{width:230}}
                placeholder='type here'
                options={Group}
                filterOption={true}
                onSelect={(value) => {
                    console.log(value)
                }}
                onSearch={(value) => {
                    console.log(value)
                }}>
                    

                </AutoComplete> */}
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