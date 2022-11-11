//usestate, useref, useeffect

//reactrouter

import Textfield from '@atlaskit/textfield';
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
    <div>
      <h1>
        Music and Chill
      </h1>
      <Textfield 
        name='Username'
        placeholder='Username'
      ></Textfield>
      <Textfield 
        name='Password'
        placeholder='Password'
      ></Textfield>
      <nav class="signinup" style={{ paddingBottom: '1rem' }}>
        <Link to='/signin'>
          Đăng nhập
        </Link> | {' '}
        <Link to='/signup'>
          Đăng ký
        </Link>
      </nav>
    </div>
    </>
  );

}

export default App;
