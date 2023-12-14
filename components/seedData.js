import { useContext,createContext } from "react";

const dummy=createContext([{
    id:Math.floor(Math.random() * 100)+Date.now(),
    Name:"Abhishek Jaiswal",
    Comment:"Right Now, Working in JUSPAY",
    date:new Date(),
    items:[
        { id:Math.floor(Math.random() * 100)+Date.now(),
            Name:"Abhishek",
            Comment:"Looking for a (Frontend Developer/ Fullstack Developer) Role",
            date:new Date(),
            items:[]
        }
    ]
},
{
    id:Math.floor(Math.random() * 100)+Date.now(),
    Name:"Abhishek Jaiswal",
    Comment:"Skills Set:- C++, React.js, Node.js, Javascript, Postman, Vscode, Git, Kibana, MySql, MongoDb,Problem Solving,System Design",
    date:new Date(),
    items:[]
}
]);

export default dummy;