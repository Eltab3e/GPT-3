import React from 'react';
import Article from '../../components/Article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './Blog.css';

const Blog = () => (
  <div className='gpt3__blog section__padding' id='blog'>
    <div className='gpt3__blog-heading'>
      <h1 className='gradient__text'>
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className='gpt3__blog-container'>
      <div className='gpt3__blog-container_groupA'>
        <Article
          imgUrl={blog01}
          date='Sep 26, 2022'
          text='GPT-3 and Open  AI is the future. Care to Explore?'
        />
      </div>
      <div className='gpt3__blog-container_groupB'>
        <Article imgUrl={blog02} date='Oct 8, 2022' text='How does AI work?' />
        <Article
          imgUrl={blog03}
          date='Nov 13, 2022'
          text='Why is artificial intelligence important?'
        />
        <Article
          imgUrl={blog04}
          date='Dec 29, 2022'
          text='What are the advantages and disadvantages of artificial intelligence?'
        />
        <Article
          imgUrl={blog05}
          date='Jan 4, 2023'
          text='What are the 4 types of artificial intelligence?'
        />
      </div>
    </div>
  </div>
);

export default Blog;
