import React from 'react'
import { useState, useContext } from 'react';
import useAdd from './useAdd';
import dummy from './seedData';

function Reply(props) {

    const { setData, replyId, toggle, setToggle } = props;

    const rawData = useContext(dummy);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');


    const dataHandler = (e) => {
        e.preventDefault();
        const newData = {
            id: Math.floor(Math.random() * 100) + Date.now(),
            Name: name,
            Comment: comment,
            data: new Date(),
            items: []
        }

        const temp = [];
        for (let i = 0; i < rawData.length; i++) {
            temp.push(rawData[i]);
        }

        temp.forEach((container) => {
            useAdd(container, replyId, newData);
        })
        setData(temp);
        setToggle(!toggle);
    }

    const closeHandler = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <div className='mx-auto border border-gray-300  w-[400px] bg-gray-200 my-4 rounded-md p-4'>
                <label className="text-black  p-4">Reply</label>

                <div className="my-2 px-2">
                    <input className="border border-black rounded-md w-[300px] py-2 px-2 text-gray-400" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>

                <div className='my-2 px-2'>
                    <input className="border border-black rounded-md w-[300px] py-2 my-2 px-2 text-gray-400" type="text" placeholder="Reply" value={comment} onChange={(e) => setComment(e.target.value)}></input>
                </div>

                <button className='bg-indigo-200 w-15 my-4 rounded-md mx-4 p-2' onClick={dataHandler}>Post</button>
                <button className='bg-gray-700 text-white w-15 my-4 rounded-md mx-4 p-2' onClick={closeHandler}>Close</button>
            </div>

        </>

    )
}

export default Reply;