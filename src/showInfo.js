import './showInfo.css'
export const ShowInfo = (props) => {
    if(props.id==="none"){
        return null;
    }
    return(<div className={"showinfo"}>
        <div className={"Name"}> {props.dane[props.id].name}  {props.dane[props.id].lastName}  </div>

        <div> Date of Birth: {props.dane[props.id].date}  </div>
        <div> Email : {props.dane[props.id].email}  </div>

    </div>)
}



