import React, { useEffect, useState } from 'react';
import languageData from './language.json'

const Navbar = () => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState(languageData.en);

  useEffect(() => {
    setTranslations(languageData[language]);
  }, [language]);

  const handleChangeLanguage = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
  };

  return (
    <div>
      <select value={language} onChange={handleChangeLanguage}>
        <option value="en">English</option>
        <option value="tr">Turkish</option>
        <option value="es">Spanish</option>
        <option value="az">Azerbaijani</option>
      </select>
      <h1>{translations.translation.welcome}</h1>
      <div style={{border:"1px solid violet", borderRadius:'8px', padding:"1rem", backgroundColor:"white", color:"purple", fontWeight:"bold"}}>{translations.translation.text}</div>
    </div>
  );
};

export default Navbar;

