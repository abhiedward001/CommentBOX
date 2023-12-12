import React from 'react'
import { useState } from 'react';
function Reply() {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [data, setData] = useState([]);

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
        <div className='mx-auto border border-gray-300 my-3 w-[500px] bg-gray-200 '>
                    <label className="text-black py-2 px-2">Reply</label>

                    <div className="my-2 px-2">
                        <input className="border border-black rounded-md w-[300px] py-2 px-2 text-gray-400" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>

                    <div className='my-2 px-2'>
                        <input className="border border-black rounded-md w-[300px] py-2 my-2 px-2 text-gray-400" type="text" placeholder="Reply" value={comment} onChange={(e) => setComment(e.target.value)}></input>
                    </div>

                    <button className='bg-blue-200 w-12 my-4 rounded-md mx-2' onClick={dataHandler}>Post</button>
                </div>
    </>
  )
}

export default Reply;