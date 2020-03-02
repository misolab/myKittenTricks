import {
  Button,
  Layout,
  OverflowMenu,
  OverflowMenuItemType,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {StyleSheet, ViewProps} from 'react-native';
import {ComponentShowcaseSetting} from '../model/showcase.model';
import {Theme} from '../serivce/theme.service';
import {ColorPaletteIcon, SettingsIcon, TrashIcon} from './icons';

export interface ShowcaseSettingsProps extends ViewProps {
  themes?: Theme[];
  settings: ComponentShowcaseSetting[];
  onThemeSelect?: (theme: Theme) => void;
  onSettingSelect?: (setting: {[prop: string]: any}) => void;
  onReset: () => void;
}

const ShowcaseSettings = (props: ShowcaseSettingsProps) => {
  const [settingsMenuVisible, setSettingsMenuVisible] = useState(false);
  const [themesMenuVisible, setThemesMenuVisible] = useState(false);

  function onResetButtonPress() {
    props.onReset();
  }

  function toggleSettingsMenu() {
    setSettingsMenuVisible(!settingsMenuVisible);
  }

  function onSettingSelect(index: number) {
    const {[index]: setting} = props.settings;

    props.onSettingSelect({
      [setting.propertyName]: setting.value,
    });

    setSettingsMenuVisible(false);
  }

  function createSettingsMenuItem(
    setting: ComponentShowcaseSetting,
  ): OverflowMenuItemType {
    return {
      title: setting.description || `${setting.propertyName}: ${setting.value}`,
    };
  }

  function createSettingsMenuItems() {
    const settings =
      props.settings && props.settings.map(createSettingsMenuItem);
    return settings || [];
  }

  function onThemeSelect(index: number) {
    props.onThemeSelect(props.themes[index]);
    setThemesMenuVisible(false);
  }

  function createThemesMenuItem(title: string): OverflowMenuItemType {
    return {title};
  }

  function createThemesMenuItems() {
    return props.themes && props.themes.map(createThemesMenuItem);
  }

  function toggleThemesMenu() {
    setThemesMenuVisible(!themesMenuVisible);
  }

  return (
    <Layout style={[styles.container, props.style]} level="1">
      <OverflowMenu
        visible={themesMenuVisible}
        onSelect={onThemeSelect}
        data={createThemesMenuItems()}
        onBackdropPress={toggleThemesMenu}>
        <Button
          size="tiny"
          icon={ColorPaletteIcon}
          disabled={!props.themes}
          onPress={toggleThemesMenu}>
          THEMES
        </Button>
      </OverflowMenu>

      <OverflowMenu
        visible={settingsMenuVisible}
        onSelect={onSettingSelect}
        data={createSettingsMenuItems()}
        onBackdropPress={toggleSettingsMenu}>
        <Button
          size="tiny"
          icon={SettingsIcon}
          disabled={!props.settings}
          onPress={toggleSettingsMenu}>
          SETTINGS
        </Button>
      </OverflowMenu>

      <Button
        size="tiny"
        status="danger"
        icon={TrashIcon}
        disabled={!props.settings}
        onPress={onResetButtonPress}>
        RESET
      </Button>
    </Layout>
  );
};

export default ShowcaseSettings;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 16,
  },
});
