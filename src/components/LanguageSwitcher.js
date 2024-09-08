import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {TranslationContext} from '../context/TranslationContext';

const LanguageSwitcher = () => {
  const {setLocale} = useContext(TranslationContext);

  return (
    <View>
      <Button title="Switch to English" onPress={() => setLocale('en')} />
      <Button title="Switch to Thai" onPress={() => setLocale('th')} />
    </View>
  );
};

export default LanguageSwitcher;
