
import React from 'react'
import reactDOM from "react-dom/client";
import Comment from './components/Comment';
import { useState } from 'react';

const App = () => {
   const [data,setData]=useState([]);

    return (
        <div>
           <Comment></Comment>  
        </div>
    )
}
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);