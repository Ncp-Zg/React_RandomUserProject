import React from 'react'
import {useHistory} from "react-router-dom"

function Card({user}) {
    const history = useHistory();
    return (
        <div style={{borderRadius:10,backgroundColor:"lightblue",margin:15,paddingBottom:10,textAlign: "center"}}>
            <img style={{width:200,height:200,objectFit:"fill",borderTopRightRadius:10,borderTopLeftRadius:10}} src={user.picture.large} alt={user.name}/>
            <p>{user.name.first}  {user.name.last}</p>
            <p>{user.location.country}</p>
            {/* <button onClick={()=>history.push(`/user/${user.login.uuid}`)}>Details</button> */}
            <button style={{borderRadius:5,color:"red",backgroundColor:"khaki",fontFamily:"inherit",fontSize:14}} onClick={()=>history.push({
                pathname:`/user/${user.login.uuid}`,
                state:user
                
                
                })}>Details</button>
        </div>
    )
}

export default Card
