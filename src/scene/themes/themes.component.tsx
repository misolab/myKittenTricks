import {
  Divider,
  List,
  ThemeProvider,
  Toggle,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import React, {useContext, useState} from 'react';
import {ListRenderItemInfo, StyleSheet} from 'react-native';
import {appThemes} from '../../app/app-theming';
import {SafeAreaLayout} from '../../component/safe-area-layout.component';
import {MappingContextValue, Theming} from '../../serivce/theme.service';
import {MenuIcon} from '../../component/icons';
import RestartAppModal from './restart-app-modal.component';
import ThemeCard from './theme-card.component';
import ThemesService from './themes.service';
import {ThemeItem} from './type';

const ThemesScreen = ({navigation}) => {
  const mappingContext: MappingContextValue = useContext(
    Theming.MappingContext,
  );
  const themeContext = useContext(Theming.ThemeContext);
  const [restartModalVisible, setRestartModalVisible] = useState(false);
  const [evaToggleChecked, setEvaToggleChecked] = useState(
    mappingContext.isEva(),
  );

  const themes = ThemesService.createThemeListItems(
    appThemes,
    mappingContext.currentMapping,
  );

  const toggleRestartModal = () => {
    setRestartModalVisible(!restartModalVisible);
  };

  function createThemeForItem(theme: ThemeItem) {
    return `${theme.mapping} ${theme.name}`.toUpperCase();
  }

  function isActiveTheme(theme: ThemeItem) {
    return (
      mappingContext.currentMapping === theme.mapping &&
      themeContext.currentTheme === theme.name
    );
  }

  function shouldDisableItem(theme: ThemeItem) {
    return themeContext.currentTheme === theme.name;
  }

  function onItemPress(info: ListRenderItemInfo<ThemeItem>) {
    themeContext.setCurrentTheme(info.item.name);
  }

  function renderItem(info: ListRenderItemInfo<ThemeItem>) {
    return (
      <ThemeProvider theme={info.item.theme}>
        <ThemeCard
          title={createThemeForItem(info.item)}
          isActive={isActiveTheme(info.item)}
          style={styles.item}
          disabled={shouldDisableItem(info.item)}
          onPress={() => onItemPress(info)}
        />
      </ThemeProvider>
    );
  }

  function onEvaToggleCheckedChange(checked: boolean) {
    setEvaToggleChecked(checked);
    setRestartModalVisible(true);
    mappingContext.setCurrentMapping(checked ? 'eva' : 'material');
  }

  function renderFooter() {
    return (
      <Toggle
        style={styles.evaToggle}
        text="Eva Design System"
        checked={evaToggleChecked}
        onChange={onEvaToggleCheckedChange}
      />
    );
  }

  function renderDrawerAction() {
    return (
      <TopNavigationAction icon={MenuIcon} onPress={navigation.toggleDrawer} />
    );
  }

  return (
    <SafeAreaLayout style={styles.safeArea} insets="top">
      <TopNavigation title="Kitten Tricks" leftControl={renderDrawerAction()} />
      <Divider />
      <List
        contentContainerStyle={styles.container}
        data={themes}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
      />

      <RestartAppModal
        onGotItButtonPress={toggleRestartModal}
        visible={restartModalVisible}
        onBackdropPress={toggleRestartModal}
      />
    </SafeAreaLayout>
  );
};

export default ThemesScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 8,
  },
  item: {
    margin: 8,
  },
  evaToggle: {
    margin: 8,
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
});
