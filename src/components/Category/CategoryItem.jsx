import { Link } from 'react-router-dom';

function CategoryItem(props) {
  const {
    idCategory,
    strCategory: name,
    strCategoryThumb: img,
    strCategoryDescription: descr,
  } = props;
  return (
    <div className='four wide column'>
      <div className='ui card '>
        <div className='image'>
          <img src={img} alt={name} />
        </div>
        <div className='content'>
          <Link to={`/category/${idCategory}`} className='header'>
            {name}
          </Link>
          <div className='description'>{descr.slice(0, 60)}...</div>
        </div>
        <div className='extra content'>
          <Link to={`/category/${idCategory}`}>
            <i className='search icon'></i>
            Watch category
          </Link>
        </div>
      </div>
    </div>
  );
}

export { CategoryItem };
