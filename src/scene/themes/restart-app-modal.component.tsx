import {Button, Layout, Modal, ModalProps, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';

interface RestartAppModalProps extends Omit<ModalProps, 'children'> {
  onGotItButtonPress: () => void;
}

const RestartAppModal = (props: RestartAppModalProps) => {
  const {onGotItButtonPress, ...modalProps} = props;
  return (
    <Modal backdropStyle={styles.backdrop} {...modalProps}>
      <Layout style={styles.container}>
        <Text category="h4">Restart</Text>
        <Text style={styles.description} appearance="hint" category="s1">
          Please restart the application for switching Design System.
        </Text>
        <Button onPress={onGotItButtonPress}>I got it</Button>
      </Layout>
    </Modal>
  );
};

export default RestartAppModal;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    padding: 16,
    width: 320,
  },
  description: {
    marginTop: 8,
    marginBottom: 24,
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
