import { useTranslation } from 'react-i18next';
import "./styles.css";

function Footer() {
  const { t } = useTranslation();
  return(
    <div className="footer">
      <span className="footer-text">Warzone DMZ Recipes {t('')}</span>
    </div>
  )
}
export default Footer;