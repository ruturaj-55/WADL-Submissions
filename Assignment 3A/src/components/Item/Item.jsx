import React, { useState } from "react";
import { Checkbox, Typography } from "antd";
import "./Item.css"

const Item = (props) => {

    const [isSelected,setSelected] = useState(false)

    const onChange = () => {
        props.item.isSelected = !isSelected
        setSelected(!isSelected) 
    }
    

    return (  
        <div className="item">
            <Checkbox onChange={onChange} checked={isSelected}>
                <Typography.Text strong delete={props.item.working}>
                    {props.item.item} 
                </Typography.Text>
            </Checkbox>
        </div>);
};

export default Item;
