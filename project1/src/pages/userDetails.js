import React from "react";
import { useParams, useLocation } from "react-router-dom";

// {"results":[{"gender":"male","name":{"title":"Monsieur",
// "first":"Driton","last":"Vidal"},"location":{"street":{"number":6479,"name":"Place du 22 Novembre 1943"},
// "city":"Leuggern","state":"Appenzell Innerrhoden","country":"Switzerland","postcode":6293,"coordinates":{"latitude":"-51.0349","longitude":"-151.9069"},
// "timezone":{"offset":"-12:00","description":"Eniwetok, Kwajalein"}},"email":"driton.vidal@example.com","login":{"uuid":"3f0a4719-6afa-4110-997f-a74390c3da19",
// "username":"lazyzebra709","password":"modelsne","salt":"BP8Qhgbw","md5":"199a9280a84a22a9d08e437891902fda","sha1":"e83ba2629fede78c7874812704b9195141051457",
// "sha256":"85b1829b48139c038000597c4d782856215b69ecd3f2d27b0738b0fdc7764a4a"},"dob":{"date":"1971-06-07T03:58:42.628Z","age":50},
// "registered":{"date":"2006-11-14T17:40:03.172Z","age":15},"phone":"075 818 61 59","cell":"075 251 11 11","id":{"name":"AVS","value":"756.8991.6359.55"}

function UserDetails() {
  const params = useParams();
  console.log(params);
  const location = useLocation();
  console.log(location);
  const user = location.state;
  return (
    <div>
      <p>Gender   :  {" " +user.gender}</p>
      <p>Name     :  {" " +user.name.title +" "+ user.name.first +" "+ user.name.last}</p>
      <p>Street   :  {" " +user.location.street.number+ " " +user.location.street.name}</p>
      <p>City     :  {" " +user.location.city}</p>
      <p>State    :  {" " +user.location.state}</p>
      <p>Country  :  {" " +user.location.country}</p>
      <p>Email    :  {" " +user.email}</p>
      <p>Birthday :  {" " +user.dob.date}</p>
      <p>Age      :  {" " +user.dob.age}</p>
      <p>Phone    :  {" " +user.phone}</p>
    </div>
  );
}

export default UserDetails;
