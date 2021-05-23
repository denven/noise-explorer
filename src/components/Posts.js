import React from 'react'
import Filter from './Filter';
import PostCard from './Card';

const Posts = ({posts = ['Alex', 'Jason']}) => {
  console.log('posts', posts)
  return (
    <div className="w-full h-8 mt-2 flex flex-col">
      <div className="flex items-center">
      <h1 className='font-semibold'>All posts</h1>
      <Filter name='Sort By'/>
      </div>

      <div className='flex flex-col'>
      { posts.map((item, index) => 
         <PostCard content={item} key={index} />
      )}

      </div>

    </div>
  )
}

export default Posts;