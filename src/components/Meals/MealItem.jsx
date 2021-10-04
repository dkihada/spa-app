import { Link } from 'react-router-dom';

function MealItem(props) {
  const { strMeal: name, idMeal, strMealThumb: img } = props;

  return (
    <div className='flex four wide column'>
      <div className='ui card '>
        <div className='image'>
          <img src={img} alt={name} />
        </div>
        <div className='content content-item'>
          <Link to={`/meal/${idMeal}`} className='header'>
            {name}
          </Link>
        </div>
        <div className='extra content'>
          <Link to={`/meal/${idMeal}`}>
            <div className='ui animated button'>
              <div className='visible content'>Watch recipe</div>
              <div className='hidden content'>
                <i className='right arrow icon'></i>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { MealItem };
