import React from 'react';
import ShowCaseContainer from '../../../component/showcase-container.component';
import ButtonShowcase from './button-showcase.component';
import {buttonSettings, buttonShowcase} from './type';

const ButtonScreen = ({navigation}): React.ReactElement => (
  <ShowCaseContainer
    showcase={buttonShowcase}
    settings={buttonSettings}
    renderItem={ButtonShowcase}
    onBackPress={navigation.goBack}
  />
);

export default ButtonScreen;
