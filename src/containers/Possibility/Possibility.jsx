import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './Possibility.css';

const Possibility = () => (
  <div className='gpt3__possibility section__padding' id='possibility'>
    <div className='gpt3__possibility-image'>
      <img src={possibilityImage} alt='possibility' />
    </div>
    <div className='gpt3__possibility-content'>
      <h4>Request Early Access to Get Started</h4>
      <h1 className='gradient__text'>
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        Before going into the possibilities of this technology innovator, you
        should understand what AI entails. Artificial Intelligence or AI refers
        to technology being leveraged to simulate human intelligence in
        machines. The goal here is to mimic capabilities of the human mind like
        decision-making, problem-solving and intelligent reasoning. This way, it
        can tackle both tedious and challenging tasks but faster and more
        accurately than humans.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
