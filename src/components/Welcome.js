import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {TranslationContext} from '../context/TranslationContext';

const Welcome = () => {
  const {translate} = useContext(TranslationContext);

  return (
    <View>
      <Text>{translate('welcome.title')}</Text>
      <Text>{translate('welcome.message')}</Text>
    </View>
  );
};

export default Welcome;
