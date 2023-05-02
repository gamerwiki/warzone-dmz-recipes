import { useParams } from 'react-router-dom';
import useDocumentTitle from '@components/useDocumentTitle';
import { useTranslation } from 'react-i18next';
import data from '@src/data/data.json';
import "./styles.css";

function DisplayRecipe() {
  const { id, mapId } = useParams();
  const { t } = useTranslation();

  const filterRecipe = data[mapId].recipes.filter(recipes => recipes.id === id);
  console.log(filterRecipe)
  const recipeName = filterRecipe[0].name;
  useDocumentTitle(`Recipe ${recipeName}`);

  const recipe = filterRecipe.map(element => {

    const itemList = element.items.map((item) => {
      return (
        <div key={item.id} className="item">
          <div className="item-info">
          <span className="item-amount">x{item.amount}</span>
            <span className="item-name">{t(`items.${item.id}`)}</span>
          </div>
          <div className="item-image">
            <img src={`/icons/${item.icon}.png`} />
          </div>
        </div>
      )
    })

    return (
      <div key={element.id} className="single-recipe">
        <div className="recipe-name">{t(`items.${element.id}`)}</div>
        <div className="recipe-info">
          <div className="recipe-image">
            <img src={`/icons/${element.icon}.png`} />
          </div>
          <div className="recipe-items">
            {itemList}
          </div>
        </div>
      </div>
    )
  });


  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {recipe}
    </main>
  );
}

export default DisplayRecipe;