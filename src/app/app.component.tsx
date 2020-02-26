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
  Text,
  Layout,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import React from 'react';
import {ImageProps, ImageStyle, StyleSheet} from 'react-native';
import {AppearanceProvider} from 'react-native-appearance';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {SplashImage} from '../component/splash-image.component';
import {StatusBar} from '../component/status-bar.component';
import {AppStorage} from '../serivce/app-storage.service';
import {Mapping, Theme, Theming} from '../serivce/theme.service';
import {AppLoading, Task} from './app-loading.component';
import {appMappings, appThemes} from './app-theming';
import {AppNavigator} from '../navigation/app.navigator';
/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (style: ImageStyle): React.ReactElement<ImageProps> => (
  <Icon {...style} name="heart" />
);

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

const Wellcome = ({safeArea = false}) => {
  const renderContent = () => (
    <>
      <Text style={[styles.text, styles.red]} category="h1">
        Welcome to UI Kitten 😻
      </Text>
      <Text style={styles.text} category="s1">
        Start with editing App.js to configure your App
      </Text>
      <Text style={styles.text} appearance="hint">
        For example, try changing theme to Dark by simply changing an import
      </Text>
      <Button style={styles.likeButton} icon={HeartIcon}>
        LIKE
      </Button>
    </>
  );
  if (safeArea) {
    return <SafeAreaView>{renderContent()}</SafeAreaView>;
    // return (
    //   <SafeAreaView>
    //     <Layout style={styles.container}>{renderContent()}</Layout>
    //   </SafeAreaView>
    // );
  }
  return <Layout style={styles.container}>{renderContent()}</Layout>;
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
                <AppNavigator />
              </SafeAreaProvider>
            </Theming.ThemeContext.Provider>
          </Theming.MappingContext.Provider>
        </ApplicationProvider>
      </AppearanceProvider>
    </>
  );
};

const styles = StyleSheet.create({
  red: {
    backgroundColor: '#f00',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
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
