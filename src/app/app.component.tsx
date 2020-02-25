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

import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import React from 'react';
import {ImageProps, ImageStyle, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SplashImage} from '../component/splash-image.component';
import {StatusBar} from '../component/status-bar.component';
import {AppStorage} from '../serivce/app-storage.service';
import {Mapping, Theme, Theming} from '../serivce/theme.service';
import {AppLoading, Task} from './app-loading.component';
import {appMappings, appThemes} from './app-theming';
import {AppearanceProvider} from 'react-native-appearance';
/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (style: ImageStyle): React.ReactElement<ImageProps> => (
  <Icon {...style} name="heart" />
);

const loadingTasks: Task[] = [
  // Should be used it when running Expo.
  // In Bare RN Project this is configured by react-native.config.js
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
      <IconRegistry icons={EvaIconsPack} />
      <AppearanceProvider>
        <ApplicationProvider {...currentMapping} theme={currentTheme}>
          <Theming.MappingContext.Provider value={mappingContext}>
            <Theming.ThemeContext.Provider value={themeContext}>
              <SafeAreaProvider>
                <StatusBar />
                <Layout style={styles.container}>
                  <Text style={styles.text} category="h1">
                    Welcome to UI Kitten 😻
                  </Text>
                  <Text style={styles.text} category="s1">
                    Start with editing App.js to configure your App
                  </Text>
                  <Text style={styles.text} appearance="hint">
                    For example, try changing theme to Dark by simply changing
                    an import
                  </Text>
                  <Button style={styles.likeButton} icon={HeartIcon}>
                    LIKE
                  </Button>
                </Layout>
              </SafeAreaProvider>
            </Theming.ThemeContext.Provider>
          </Theming.MappingContext.Provider>
        </ApplicationProvider>
      </AppearanceProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});

// export default App;

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
