import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategory } from '../API';
import { MealList } from '../components/Meals/MealList';
import { Preloader } from '../components/Preloader/Preloader';

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <div className='ui grid container'>
        <div onClick={goBack} className='ui animated button left floated'>
          <div className='visible content'>Go Back</div>
          <div className='hidden content'>
            <i className='left arrow icon'></i>
          </div>
        </div>
      </div>

      {!meals.length ? (
        <Preloader />
      ) : (
        <>
          <h2>{name}</h2>
          <MealList meals={meals} />
        </>
      )}
    </>
  );
}

export { Category };
