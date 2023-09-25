import {View, Platform} from 'react-native';
import {RNButton, RNModal, RNFilePicker, WebFilePicker} from '~/5_shared/ui';
import styles from './fileUploader.module.css';

type FileUploaderProps = {
  isOpen: boolean;
  onClose: () => void;
  onChangeRN: (newData: Array<DocumentPickerResponse>) => void;
  onChangeWeb: (e: React.ChangeEvent) => void;
};

export function FileUploader(props: FileUploaderProps) {
  const {isOpen, onClose, onChangeRN, onChangeWeb} = props;

  return (
    <RNModal isOpen={isOpen} onClose={onClose}>
      {Platform.OS !== 'web' ? (
        <View>
          <RNFilePicker onChange={onChangeRN} />
          <View style={styles['close-button']}>
            <RNButton title="Закрыть" color="#3667c9" onPress={onClose} />
          </View>
        </View>
      ) : (
        <>
          <WebFilePicker onChange={onChangeWeb} />
          <div className={styles['close-button']}>
            <RNButton title="Закрыть" color="#3667c9" onPress={onClose} />
          </div>
        </>
      )}
    </RNModal>
  );
}
