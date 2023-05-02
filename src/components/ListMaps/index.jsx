import { Link, useParams } from 'react-router-dom';
import useDocumentTitle from '@components/useDocumentTitle';
import { useTranslation } from 'react-i18next';
import data from '@src/data/data.json';
import "./styles.css";

function ListMaps() {
  const { map } = useParams();
  const { t } = useTranslation();

  useDocumentTitle(`Warzone DMZ Recipes - ${map}`);
  Object.keys(data).map((item) => (
    console.log(data[item])
  ))
  return (
    <>
    <main>
      <div className="map-selection">
        <span className="text">{t('map-selection')}</span>
      </div>
      <div className="map-cards">
      {Object.keys(data).map((item, index) => (
        <Link to={`./map/${item}`} key={index} className="card">
          <div className="map-name">{data[item].name}</div>
          <div className="map-image">
            <img src={`./images/${item}.webp`} />
          </div>
        </Link>
      ))}
      </div>
    </main>
    </>
  );
}

export default ListMaps;