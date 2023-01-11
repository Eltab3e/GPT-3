import React from 'react';
import Feature from '../../components/Feature/Feature';
import './Features.css';

const featuresData = [
  {
    title: 'Data ingestion',
    text: 'Data ingestion is one of the most important features of artificial intelligence. Artificially intelligent systems deal with huge amounts of data.',
  },
  {
    title: 'Imitates human cognition',
    text: 'We call it an artificially intelligent system because it essentially imitates or mimics the way the human mind thinks and solves problems. This is what makes AI unique.',
  },
  {
    title: 'Prevent natural disasters',
    text: 'We are all friendly with using AI for our businesses, for our gaming profiles, and more such purposes. Now it is our turn to take AI one step ahead and hone it.',
  },
  {
    title: 'Facial Recognition and Chatbots',
    text: 'Facial recognition system enables a machine to unlock or provide authorized access to an individual, by verifying or identifying a person’s face.',
  },
];

const Features = () => (
  <div className='gpt3__features section__padding' id='features'>
    <div className='gpt3__features-heading'>
      <h1 className='gradient__text'>
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className='gpt3__features-container'>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
