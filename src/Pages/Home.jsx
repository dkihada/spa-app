import { useState, useEffect } from 'react';
import { getAllCategories } from '../API';
import { Preloader } from '../components/Preloader/Preloader';
import { CategoryList } from '../components/Category/CategoryList';

function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return (
    <>
      <h2>Category</h2>
      {!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}
    </>
  );
}

export { Home };
