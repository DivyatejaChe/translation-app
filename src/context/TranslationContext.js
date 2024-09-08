import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

// CMS API URL
const API_URL = 'https://typical-warmth-3f427bd188.strapiapp.com/api';

export const TranslationContext = createContext();

export const TranslationProvider = ({children}) => {
  const [translations, setTranslations] = useState({});
  const [locale, setLocale] = useState('en'); // Default language is "en"

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          'https://typical-warmth-3f427bd188.strapiapp.com/api/translations',
        );
        const transformedTranslations = transformResponse(response.data);
        console.log('RESPONSE FROM CMS: ', transformedTranslations);
        setTranslations(transformedTranslations);
      } catch (error) {
        console.error('Error fetching translations:', error);
      }
    };

    fetchTranslations();
  }, []);

  // To transform the API response
  const transformResponse = data => {
    const transformed = {};
    data.data.forEach(item => {
      transformed[item.attributes.key] = {
        en: item.attributes.en,
        th: item.attributes.th,
        version: item.attributes.version,
      };
    });
    return transformed;
  };

  const translate = key => {
    return translations[key] ? translations[key][locale] : key;
  };

  return (
    <TranslationContext.Provider value={{translate, setLocale}}>
      {children}
    </TranslationContext.Provider>
  );
};
