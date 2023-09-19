import {ReactNode} from 'react';
import {View, Modal, StyleSheet} from 'react-native';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function RNModal(props: ModalProps) {
  const {isOpen, onClose, children} = props;

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isOpen}
      onRequestClose={onClose}>
      <View style={styles.containerFileUploader}>{children}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  containerFileUploader: {
    padding: 100,
  },
});
