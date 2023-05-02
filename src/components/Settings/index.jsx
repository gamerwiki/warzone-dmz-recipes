import useDocumentTitle from '@components/useDocumentTitle';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import "./styles.css";

function Settings() {
  const { t } = useTranslation();
  useDocumentTitle(t('settings'));
  const currentLang = i18next.resolvedLanguage;

  return (
    <main>
      <div className="language-block">
        <div className="title">{t('choose-language')}</div>
        <div className="language-selection">
          <button className={currentLang == 'en' ? 'active' : ''} onClick={()=> i18next.changeLanguage('en')}>English</button>
          <button className={currentLang == 'pt' ? 'active' : ''} onClick={()=> i18next.changeLanguage('pt-BR')}>Português Brasil</button>
        </div>
      </div>
    </main>
  );
}

export default Settings;