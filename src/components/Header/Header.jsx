import './Header.css';

function Header() {
  return (
    <div className='ui secondary menu container'>
      <a className='active item'>Home</a>
      <a className='item'>Messages</a>
      <a className='item'>Friends</a>
      <div className='right menu'>
        <div className='item'>
          <div className='ui icon input'>
            <input type='text' placeholder='Search...' />
            <i className='search link icon'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Header };
