import {
  Divider,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ComponentShowcase,
  ComponentShowcaseSetting,
} from '../model/showcase.model';
import {Theme, Theming} from '../serivce/theme.service';
import {ArrowIosBackIcon} from './icons';
import {
  SafeAreaLayout,
  SafeAreaLayoutProps,
} from './safe-area-layout.component';
import ShowcaseSettings from './showcase-settings.component';
import Showcase from './showcase.component';

interface ShowCaseContainerProps extends SafeAreaLayoutProps {
  showcase: ComponentShowcase;
  settings?: ComponentShowcaseSetting[];
  renderItem: (props: any) => React.ReactElement;
  onBackPress?: () => void;
}

const themes: Theme[] = ['light', 'dark'];

const ShowCaseContainer = (props: ShowCaseContainerProps) => {
  const {
    showcase,
    settings,
    renderItem,
    children,
    onBackPress,
    ...showcaseProps
  } = props;

  const [showcaseSettings, setShowcaseSettings] = useState({});
  const themeContext = useContext(Theming.ThemeContext);

  const onSelectSetting = (selectedSettings: {[prop: string]: any}): void => {
    setShowcaseSettings({...settings, ...selectedSettings});
  };

  const onResetSettings = (): void => {
    setShowcaseSettings({});
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={onBackPress} />
  );

  return (
    <SafeAreaLayout style={styles.container} insets="top">
      <TopNavigation title={showcase.title} leftControl={renderBackAction()} />
      <Divider />
      <ShowcaseSettings
        themes={themes}
        settings={settings}
        onSettingSelect={onSelectSetting}
        onThemeSelect={themeContext.setCurrentTheme}
        onReset={onResetSettings}
      />
      <Divider />
      {children}
      <Showcase
        {...showcaseProps}
        showcase={showcase}
        renderItem={renderItem}
        settings={showcaseSettings}
      />
    </SafeAreaLayout>
  );
};

export default ShowCaseContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
