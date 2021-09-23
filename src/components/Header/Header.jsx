import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='ui secondary menu container'>
      <Link to='/' className='item'>
        Home
      </Link>
      <Link to='/about' className='item'>
        About
      </Link>
      <Link to='/contacts' className='item'>
        Contacts
      </Link>
      <div className='right menu'>
        <div className='item'>
          <div className='ui icon input'>
            <input type='text' placeholder='Search...' />
            <i className='search link icon'></i>
          </div>
        </div>
        <a className='item'>REPO</a>
      </div>
    </div>
  );
}

export { Header };
