import React from 'react'
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <main>
        <h1>
            Đăng ký
        </h1>
        <Textfield 
          name='Username'
          placeholder='Username'
        ></Textfield>
        <Textfield 
          name='Password'
          placeholder='Password'
        ></Textfield>
        <Textfield 
          name='Passwordag'
          placeholder='Password again'
        ></Textfield>
        <nav class='signupbt'>
          <Link to='/'>
            Quay lại
          </Link>
          <Link to='/signin'>
            Đăng ký
          </Link>
        </nav>
    </main>
  )
}

export default Signup