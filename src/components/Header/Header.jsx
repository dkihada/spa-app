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
        <a
          href='https://github.com/dkihada/spa-react-food'
          target='_blank'
          className='item'
        >
          REPO
        </a>
      </div>
    </div>
  );
}

export { Header };
