import {
  Avatar,
  Divider,
  Drawer,
  DrawerElement,
  DrawerHeaderFooter,
  DrawerHeaderFooterElement,
  Layout,
  MenuItemType,
  Text,
} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BookIcon, GithubIcon} from '../../component/icons';
import {SafeAreaLayout} from '../../component/safe-area-layout.component';
import AppInfoService from '../../serivce/app-info.service';

const DATA: MenuItemType[] = [
  {title: 'Libraries', icon: GithubIcon},
  {title: 'Documentation', icon: BookIcon},
];

const HomeDrawer = ({navigation}): DrawerElement => {
  const onItemSelect = (index: number) => {
    switch (index) {
      case 0:
        navigation.toggleDrawer();
        navigation.navigate('Libraries');
        break;

      case 1:
        // WebBrowserService.openBrowserAsync('https://akveo.github.io/react-native-ui-kitten');
        navigation.toggleDrawer();
        break;
    }
  };

  const renderHeader = () => (
    <Layout style={styles.header} level="2">
      <View style={styles.profileContainer}>
        <Avatar
          size="giant"
          source={require('../../asset/images/image-app-icon.png')}
        />
        <Text category="h6" style={styles.profileName}>
          Kitten Tricks
        </Text>
      </View>
    </Layout>
  );

  const renderFooter = (): DrawerHeaderFooterElement => (
    <React.Fragment>
      <Divider />
      <DrawerHeaderFooter
        disabled={true}
        description={`Version ${AppInfoService.getVersion()}`}
      />
    </React.Fragment>
  );

  return (
    <SafeAreaLayout style={styles.safeArea} insets="top">
      <Drawer
        header={renderHeader}
        footer={renderFooter}
        data={DATA}
        onSelect={onItemSelect}
      />
    </SafeAreaLayout>
  );
};

export default HomeDrawer;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});
