import {Platform} from 'react-native';
import {RNButton, RNModal, WebFilePicker} from '~/5_shared/ui';

type FileUploaderProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function FileUploader(props: FileUploaderProps) {
  const {isOpen, onClose} = props;

  if (Platform.OS === 'web') {
    console.log('web');
  }

  return (
    <RNModal isOpen={isOpen} onClose={onClose}>
      {Platform.OS === 'web' ? <WebFilePicker /> : null}
      <RNButton title="Отмена" color="#3667c9" onPress={onClose} />
    </RNModal>
  );
}
