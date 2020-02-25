import React from 'react';
import {ImageProps, NativeModules} from 'react-native';

export interface LoadingAnimationProps extends ImageProps {
  loading: boolean;
}

export const SplashImage = (
  props: LoadingAnimationProps,
): React.ReactElement | undefined => {
  if (!props.loading) {
    const splashScreen = NativeModules.SplashScreen;
    //  TODO : 왜 null 일까??
    if (NativeModules.SplashScreen) {
      splashScreen.close({
        animationType: 2,
        duration: 500,
      });
    } else {
      console.log('splashScreen is null', splashScreen);
    }
  }

  return null;
};
