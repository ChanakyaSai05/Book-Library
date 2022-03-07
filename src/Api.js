// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardBody,
//   CardText,
//   CardTitle,
//   Col,
//   Container,
//   Row,
// } from "reactstrap";
// import axios from "axios";
// import { FaMapMarkedAlt } from "react-icons/fa";

// export default function Api() {
//   const [details, setDetails] = useState([]);
//   const fetchDetails = async () => {
//     const { data } = await axios.get("https://randomuser.me/api/");
//     setDetails(data.results[0]);
//   };
//   useEffect(() => {
//     fetchDetails();
//   }, []);
//   return (
//     <div
//       style={{
//         width: "100vw",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: "10vh",
//       }}
//     >
//       <div style={{ width: "40vw" }}>
//         <Container className="p-4 bg-primary ">
//           <Row>
//             <Col className="mt-4">
//               <Card>
//                 <CardBody className="text-center">
//                   <img
//                     src={details.picture?.large}
//                     alt="image1"
//                     height="150"
//                     width="150"
//                     className="rounded-circle img-thumbnail border-danger"
//                   />
//                   <CardTitle className="text-primary">
//                     <span>{details.name?.title}</span>
//                     <span>{details.name?.first}</span>
//                     <span>{details.name?.last}</span>
//                   </CardTitle>
//                   <CardText>
//                     <FaMapMarkedAlt />
//                     {details.location?.country}
//                     <p>{details?.phone}</p>
//                   </CardText>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// }

//REST API
//unique api used by developers
//Ultimately every API works the same it have extra protocals
//but ultimately working is same

//Atif in browser request for vanila
//There is an Request box
//Header,Get(is used for fetch the data),Flavours(end point)and body

//Atif is sending venila flavour ke sath ee sari details bhi
// bhej raha hai

//and there are operations
//create(called POST operation) read(GET) update(PUT) delete(DELETE)
//These are the operations API have

//REST representation state transfer
//1.simple to use
//2.scalable it means website mey bahut sari users hai it will manage that
//whenever website is growing it is scalable and stateless
//3.It has a high performance because it uses cachememory(temopary memory)
//project jitna badtha jayega REST vutna handle karega

//Now request kiya vanilla and gives response by robbins
//Now there is responce
//Response box has
//Response comes in JSON
//every product will have unique id
//This is called Get operation that Atif knows that vanilla is
//present

//Update
//If vanilla is not there again he says I want vanilla
//then website says it is not there in restaurent(database)
//then Restaurent update choclate is there this is called
//update operation is

//Delete
//delete is when ever you want delete the data we can delete
//from backend

//create
//If naya flavour aya (Rasberry it is not there in database)tho Atif ko ek popup ayega from the app
//we have rasberry flavour also
//since indatabase it is not there we can create in database
//called POST from frontend .

//sir has dummy link we can fetch the data from backend.
//It is what end point(URL) is we can fetch the data from there(I think)

//we can write data of JSON in javascript file also(called highly integrated with JSON)

//promises
//when ever we will get the data from API it will always return a promise

import React, { useEffect, useState } from "react";
import "./App.css";
function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => err);
    console.log(data);
  }, []);

  return (
    <div className="app">
      <h1>Fetch data from API using React</h1>
      {data.map((item) => (
        <div className="box">
          <p>{item.name}</p>
          <p>{item.username}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
}
export default Api;
// import React, { useEffect, useState } from "react";
// export default function Api() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((result) => setData(result))
//       .catch((err) => err);
//     // console.log(data);
//   }, []);
//   useEffect(() => {
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify({
//         username: "James Bond",
//         email: "james@gmail.com",
//         id: "100",
//       }),
//     };
//     fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//     // .then((data1) => setData([...data, data1]));
//     //the above line is working that means that body is adding to api which is shown on screen
//     //but each and every time os saving that means the localhost is refreshing so again one more jamesbond email andusername is creating
//     //to  the api which is shown on screen
//   }, []);

//   return (
//     <div>
//       {data.map((item) => (
//         <div>
//           <div>{item.name}</div>
//           <div>{item.email}</div>
//           <div>{item.username}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

//API is just link between applicatons

// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardBody,
//   CardText,
//   CardTitle,
//   Col,
//   Container,
//   Row,
// } from "reactstrap";
// import { FaMapMarkedAlt } from "react-icons/fa";
// import axios from "axios";
// export default function Api() {
//   const [details, setDetails] = useState([]);
//   const fetchDetails = async () => {
//     const { data } = await axios.get("https://randomuser.me/api/");
//     console.log(data.results[0]);
//     setDetails(data.results[0]);
//   };
//   useEffect(() => {
//     fetchDetails();
//   }, []);
//   return (
//     <Container fluid className=" p-4 bg-primary app">
//       <Row>
//         <Col md={4} className="offset-ms-4 mt-4">
//           {/* <Col className="mt-4"> directly it is working*/}
//           <Card>
//{
// <CardBody>
//             <img
//               height="150"
//               width="150"
//               className="rounded-circle img-thumbnail border-danger"
//               src={details.picture?.large}
//               alt="image1"
//             />
//             <CardTitle className="text-primary">
//               <h1>
//                 <span className="pr-2">{details.name?.title}</span>
//                 <span>{details.name?.first}</span>
//                 <span>{details.name?.last}</span>
//               </h1>
//             </CardTitle>
//             <CardText>
//               <FaMapMarkedAlt />
//               {details.location?.country}
//               <p>{details?.phone}</p>
//             </CardText>
//           </CardBody>
//         </Card>
//       </Col>
//     </Row>
//   </Container>
// );
//}
