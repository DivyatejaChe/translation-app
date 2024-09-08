import React from 'react';
import {View} from 'react-native';

import {TranslationProvider} from '../context/TranslationContext';
import Welcome from '../components/Welcome';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Home = () => {
  return (
    <TranslationProvider>
      <View>
        <Welcome />
        <LanguageSwitcher />
      </View>
    </TranslationProvider>
  );
};

export default Home;

/**
 * To this URL: https://<YOUR_DOMAIN>/api/<YOUR_CT>
 * With the header: Authorization: bearer <YOUR_API_TOKEN>
 * API Token: xxx
 * Strapi Cloud: https://cloud.strapi.io/projects/my-strapi-cms-5e70a188ab/deployments
 * Strapi Deployed URL: https://typical-warmth-3f427bd188.strapiapp.com/api/translations
 */
