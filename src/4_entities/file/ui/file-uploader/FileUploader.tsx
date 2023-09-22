import {Platform} from 'react-native';
import {RNButton, RNModal} from '~/5_shared/ui';
import {WebFilePicker} from '~/5_shared/ui';

type FileUploaderProps = {
  isOpen: boolean;
  onClose: () => void;
  onChange: (e: React.ChangeEvent) => void;
};

export function FileUploader(props: FileUploaderProps) {
  const {isOpen, onClose, onChange} = props;

  if (Platform.OS === 'web') {
    console.log('web');
  }

  return (
    <RNModal isOpen={isOpen} onClose={onClose}>
      {Platform.OS === 'web' ? <WebFilePicker onChange={onChange} /> : null}
      <RNButton title="Отмена" color="#3667c9" onPress={onClose} />
    </RNModal>
  );
}
