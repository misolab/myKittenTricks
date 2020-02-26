import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {ImageProps, ImageStyle, StyleSheet} from 'react-native';

const HeartIcon = (style: ImageStyle): React.ReactElement<ImageProps> => (
  <Icon {...style} name="heart" />
);

interface WellcomeProps {
  name?: string;
}
const Wellcome = ({name = 'Wellcome'}: WellcomeProps) => {
  const EvaIcon = ({name, size, fill}) => (
    <Icon name={name} width={size} height={size} fill={fill} />
  );
  return (
    <Layout style={styles.container}>
      <Text style={[styles.text, styles.red]} category="h1">
        {name} 😻
      </Text>
      <Icon pack="app" name="auth" />
      <EvaIcon name="facebook" size={100} fill="#3366FF" />
      <Text style={styles.text} category="s1">
        Start with editing App.js to configure your App
      </Text>
      <Text style={styles.text} appearance="hint">
        For example, try changing theme to Dark by simply changing an import
      </Text>
      <Button style={styles.likeButton} icon={HeartIcon}>
        LIKE
      </Button>
    </Layout>
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

export default Wellcome;
