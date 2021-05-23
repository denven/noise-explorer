import React from 'react'
import PostCard from './Card';
import SortBy from './Sortby';

const Posts = ({posts = []}) => {
  console.log('posts', posts)
  return (
    <div className="w-full h-8 mt-2 flex flex-col">
      <div className="flex items-center">
      <SortBy />
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