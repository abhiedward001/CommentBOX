import React from 'react'
import { useState } from 'react';
import Reply from './Reply';
function CommentDisplay({ data }) {
    console.log(data);
    return (
        <div>
            <div className='border border-gray-400 bg-gray-200 w-[500px] mx-auto px-4 my-6' key={Math.random()}>
                <div className='flex flex-wrap justify-between'>
                    <h3>{data.Name}</h3>
                    <h2>{data.date.toLocaleString()}</h2>
                </div>

                <p>{data.Comment}</p>
                <button className='bg-blue-300 w-16 my-4 '>Reply</button>
                <button className='bg-blue-300 w-16 my-4 mx-5' >Edit</button>
            </div>
           <Reply></Reply>
            <div className='mx-6'>
                {data?.items?.map((elem) => <CommentDisplay data={elem}></CommentDisplay>)}
            </div>
        </div>
    )
}

export default CommentDisplay