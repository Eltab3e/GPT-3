import React from 'react';
import Feature from '../../components/Feature/Feature';
import './WhatGPT3.css';

const WhatGPT3 = () => (
  <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
    <div className='gpt3__whatgpt3-feature'>
      <Feature
        title='What is GPT-3'
        text='Generative Pre-trained Transformer 3 (GPT-3) is an autoregressive language model that uses deep learning to produce human-like text. Given an initial text as prompt, it will produce text that continues the prompt.'
      />
    </div>
    <div className='gpt3__whatgpt3-heading'>
      <h1 className='gradient__text'>
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className='gpt3__whatgpt3-container'>
      <Feature
        title='Chatbots'
        text='A chatbot is a computer program that uses (AI) and natural language processing (NLP) to understand customer questions and automate responses to them.'
      />
      <Feature
        title='Knowledgebase'
        text='A knowledge base in artificial intelligence aims to capture human expert knowledge to support decision-making, problem-solving, and more.'
      />
      <Feature
        title='Education'
        text='Artificial Intelligence (AI) has the potential to address some of the biggest challenges in education today, innovate teaching and learning practices.'
      />
    </div>
  </div>
);

export default WhatGPT3;
