import React from 'react'
import Card from "../components/Card"
import axios from "axios"
import {useState,useEffect} from "react"


// {"gender":"female","name":{"title":"Mrs","first":"Maria","last":"Andersen"},"location":{"street":{"number":7276,"name":"Hestehavevej"},"city":"Nørrebro","state":"Midtjylland","country":"Denmark","postcode":83767,"coordinates":{"latitude":"-34.5167","longitude":"14.6172"},"timezone":{"offset":"0:00","description":"Western Europe Time, London, Lisbon, Casablanca"}},"email":"maria.andersen@example.com","login":{"uuid":"a067b495-df98-4e77-a293-77a8f833bc2c","username":"blueladybug517","password":"monica","salt":"7LG4CD5k","md5":"52e68dd9a52f9600099633a8a73ac4d9","sha1":"c4f5b1b2e139b6f02ce6fcdf60c71e47087a80c5","sha256":"26413e4caef4162055159fc8ff3ea0bdfd2402dbb78c26d0921a4a75bd3f858b"},"dob":{"date":"1980-01-23T07:44:06.820Z","age":41},"registered":{"date":"2011-06-16T06:05:47.056Z","age":10},"phone":"52278178","cell":"98303299","id":{"name":"CPR","value":"230180-2128"},"picture":{"large":"https://randomuser.me/api/portraits/women/91.jpg","medium":"https://randomuser.me/api/portraits/med/women/91.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/91.jpg"},"nat":"DK"}


function Homepage() {

    const [userList,setUserList]=useState([])

    const fetchData=()=>{
        axios.get("https://randomuser.me/api/?results=50").then(res=>setUserList(res.data.results))
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div style={{backgroundColor:"yellowgreen",color:"black",display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            
            {/* {
            userList.length>0 ? 
            userList.map(usr=> <p>{usr.gender}</p>) :
            null
            } */}

            { userList?.map(usr=> <Card user={usr} key={usr.login.uuid}/>)}

            {/* {userList[0].gender} */}
            
        </div>
    )
}

export default Homepage
