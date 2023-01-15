import './selectName.css';
import {ShowInfo} from "./showInfo";
import {useState} from "react";
export const SelectName = (props) => {
    const [id,setid]=useState("none");
    return (
        <div>
            <select className={"selectName"} onChange={(e)=>{
                setid(e.target.value)
            }}>
                <option value={"none"}>{"select a name"}</option>
                {props.data.map((option) => (

                    <option value={option.id}>{option.name+' '+option.lastName}</option>
                ))}
            </select>
            <ShowInfo dane={props.data} id={id}></ShowInfo>
        </div>
    );
}

