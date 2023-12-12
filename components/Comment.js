import React from 'react'
import { useState } from 'react';
import CommentDisplay from './CommentDisplay';
function Comment() {

    const dummy=[{
        Name:"Abhishek Jaiswal",
        Comment:"Working in juspay",
        date:new Date(),
        items:[
            {
                Name:"Abhishek",
                Comment:"Working in juspay",
                date:new Date(),
                items:[]
            }
        ]
    },
    {
        Name:"himanshu Jaiswal",
        Comment:"WOrking in juspay",
        date:new Date(),
        items:[]
    }
]
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [data, setData] = useState(dummy);

    const dataHandler = (e) => {
        e.preventDefault();
        const arr = [...data];

        arr.push({
            Name: name,
            Comment: comment,
            date: new Date(),
            items:[]
        })
        setData(arr);
        setName("");
        setComment("");
    }
    return (
        <>
            <div className='w-8/12 mx-auto bg-gray-600 shadow-lg my-4 p-4'>
                <div className='mx-auto border border-gray-300 my-3 w-[500px] bg-gray-200 '>
                    <label className="text-black py-2 px-2">Comment</label>

                    <div className="my-2 px-2">
                        <input className="border border-black rounded-md w-[300px] py-2 px-2 text-gray-400" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>

                    <div className='my-2 px-2'>
                        <input className="border border-black rounded-md w-[300px] py-2 my-2 px-2 text-gray-400" type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)}></input>
                    </div>

                    <button className='bg-blue-200 w-12 my-4 rounded-md mx-2' onClick={dataHandler}>Post</button>
                </div>

                {data.length === 0 ? (<div></div>) : 
                data.map((item)=>{
                   return(
                    <CommentDisplay data={item}> </CommentDisplay>
                   ) 
                })
                }
            </div>

        </>

    )
}

export default Comment;