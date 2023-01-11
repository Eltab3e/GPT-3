import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './Header.css';

const Header = () => (
  <div className='gpt3__header section__padding' id='home'>
    <div className='gpt3__header-content'>
      <h1 className='gradient__text'>
        Let&apos;s Build Something amazing with GPT-3 OpenAI
      </h1>
      <p>
        AI is important because it can give enterprises insights into their
        operations that they may not have been aware of previously and because,
        in some cases, AI can perform tasks better than humans. Particularly
        when it comes to repetitive, detail-oriented tasks.
      </p>

      <div className='gpt3__header-content__input'>
        <input type='email' placeholder='Your Email Address' />
        <button type='button'>Get Started</button>
      </div>

      <div className='gpt3__header-content__people'>
        <img src={people} alt='logo' />
        <p>2079, people requested access in the last 24 hours</p>
      </div>
    </div>

    <div className='gpt3__header-image'>
      <img src={ai} alt='ai-logo' />
    </div>
  </div>
);

export default Header;
