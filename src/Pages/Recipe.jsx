import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMealById } from '../API';
import { Preloader } from '../components/Preloader/Preloader';

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      <div className='ui grid container btn-back'>
        <div onClick={goBack} className='ui animated button left floated'>
          <div className='visible content'>Go Back</div>
          <div className='hidden content'>
            <i className='left arrow icon'></i>
          </div>
        </div>
      </div>

      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className='ui grid container'>
          <div className='ui piled segment'>
            <h2 className='ui header'>{recipe.strMeal}</h2>
            {recipe.strArea ? (
              <div className='extra'>{recipe.strArea}</div>
            ) : null}
            <div className='recipe-body'>
              <div>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h3>Recipe:</h3>
                {recipe.strInstructions}
              </div>
            </div>
            <table className='ui olive table'>
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes('Ingredient') && recipe[key]) {
                    const newName =
                      recipe[key][0].toUpperCase() + recipe[key].slice(1);
                    return (
                      <tr key={key}>
                        <td>{newName}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>

            {recipe.strYoutube ? (
              <div className='ui left floated padded left aligned vertical segment'>
                <h2>Video Recipe</h2>
                <iframe
                  width='550px'
                  height='300px'
                  title={recipe.strMeal}
                  src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                    -11
                  )}`}
                ></iframe>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

export { Recipe };
