import { Link, useParams } from 'react-router-dom';
import useDocumentTitle from '../useDocumentTitle';
import { useTranslation } from 'react-i18next';
import data from '@src/data/data.json';
import "./styles.css";

function ListRecipes() {
  useDocumentTitle(`Recipes`);
  const { t } = useTranslation();
  const { mapId } = useParams();

  const recipeList = data[mapId].recipes.map((recipe, index) => {

    const itemList = recipe.items.map((item) => {
      return (
        <div key={item.id} className="item">
          <div className="item-image">
            <img src={`icons/${item.icon}.png`} />
            <span className="item-amount">x{item.amount}</span>
          </div>
        </div>
      )
    })
          
    return (
      <div className="recipe-block" key={index}>
        <Link to={`./recipes/${recipe.id}`} className="recipe">
          <div className="recipe-name">{t(`items.${recipe.id}`)}</div>
          <div className="recipe-image">
            <img src={`./icons/${recipe.icon}.png`} />
          </div>
          <div className="item-list">
            {itemList}
          </div>
        </Link>
      </div>
    )
})

  

  return (
    <main>
      <div className="recipe-list">
        {recipeList}
      </div>
    </main>
  );
}

export default ListRecipes;