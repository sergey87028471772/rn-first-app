import {useContext} from 'react';
import {Platform} from 'react-native';
import {DocumentPickerResponse} from 'react-native-document-picker';
import {PdfDocumentContext} from '~/4_entities/file';
import {RNButton, RNModal, RNFilePicker, WebFilePicker} from '~/5_shared/ui';

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
        <RNFilePicker onChange={onChangeRN} />
      ) : (
        <WebFilePicker onChange={onChangeWeb} />
      )}
      <RNButton title="Закрыть" color="#3667c9" onPress={onClose} />
    </RNModal>
  );
}
