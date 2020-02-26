/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten TypeScript template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppIconsPack} from './app-icons-pack';
import React from 'react';
import {AppearanceProvider} from 'react-native-appearance';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SplashImage} from '../component/splash-image.component';
import {AppNavigator} from '../navigation/app.navigator';
import {AppStorage} from '../serivce/app-storage.service';
import {Mapping, Theme, Theming} from '../serivce/theme.service';
import {AppLoading, Task} from './app-loading.component';
import {appMappings, appThemes} from './app-theming';
/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

const loadingTasks: Task[] = [
  () =>
    AppStorage.getMapping(defaultConfig.mapping).then(result => [
      'mapping',
      result,
    ]),
  () =>
    AppStorage.getTheme(defaultConfig.theme).then(result => ['theme', result]),
];

const defaultConfig: {mapping: Mapping; theme: Theme} = {
  mapping: 'eva',
  theme: 'light',
};

const App = ({mapping, theme}): React.ReactElement => {
  const [mappingContext, currentMapping] = Theming.useMapping(
    appMappings,
    mapping,
  );
  const [themeContext, currentTheme] = Theming.useTheming(
    appThemes,
    mapping,
    theme,
  );

  return (
    <>
      <IconRegistry icons={[EvaIconsPack, AppIconsPack]} />
      <AppearanceProvider>
        <ApplicationProvider {...currentMapping} theme={currentTheme}>
          <Theming.MappingContext.Provider value={mappingContext}>
            <Theming.ThemeContext.Provider value={themeContext}>
              <SafeAreaProvider>
                <AppNavigator />
              </SafeAreaProvider>
            </Theming.ThemeContext.Provider>
          </Theming.MappingContext.Provider>
        </ApplicationProvider>
      </AppearanceProvider>
    </>
  );
};

const Splash = ({loading}): React.ReactElement => (
  <SplashImage
    loading={loading}
    source={require('../asset/images/image-splash.png')}
  />
);

export default (): React.ReactElement => (
  <AppLoading
    tasks={loadingTasks}
    initialConfig={defaultConfig}
    placeholder={Splash}>
    {props => <App {...props} />}
  </AppLoading>
);
