import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../API';
import { MealList } from '../components/Meals/MealList';
import { Preloader } from '../components/Preloader/Preloader';

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  console.log(useParams());

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <h2>{name}</h2>

      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export { Category };
