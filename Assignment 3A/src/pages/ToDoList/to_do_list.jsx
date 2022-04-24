import React, { useState } from 'react';
import { Form,Input , Divider } from 'antd';
import ButtonComponent from '../../components/Button/Button';
import Item from '../../components/Item/Item';
import './to_do_list.css'

const ToDoList = () => {

    const [item,setItem] = useState("");
    const [itemList,updateItemList] = useState([]);


    const submit = () => {
        const data = {
            item,
            isSelected:false,
            working:false
        }
        updateItemList(state => [...state, data]);
      };

    const complete = () => {
        updateItemList(itemList.filter((item) => {            
            if(item.isSelected === true){
                item.working = true;               
            }
            return item;
        }));
    }

    const remove = () => {
        updateItemList(itemList.filter((item) => item.isSelected !== true))         
    }

    return(
        <div className='listPage'>
            <div className='listCard'>
                <h1>TO DO LIST</h1>
                <Form>
                    <Form.Item name="item" label="Item" rules={[{ required: true }]}>
                        <Input onChange={ (event) => setItem(event.target.value)}/>
                    </Form.Item>
                    <Form.Item>
                        <ButtonComponent type="Add Item" action={submit}></ButtonComponent>
                    </Form.Item>
                </Form>
                <Divider />

                <div style={{ display:"flex",flexDirection:"column",alignItems:"start"}}>
                    {itemList.map((item,index)=>{
                        return (
                            <Item item={item} key={index}/>
                        );
                    })}
                </div>

                <Divider />

                <div style={{alignItems:"center" , justifyContent:"space-evenly"}}>
                    <ButtonComponent type="Complete" action={complete}/>
                    <ButtonComponent type="Edit"/>
                    <ButtonComponent type="Remove" action={remove}/>
                </div>
            </div>
        </div>
    )

}

export default ToDoList;