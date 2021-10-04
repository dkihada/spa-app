import { CategoryItem } from './CategoryItem';

function CategoryList({ catalog = [] }) {
  return (
    <div className='ui grid container'>
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
}

export { CategoryList };
