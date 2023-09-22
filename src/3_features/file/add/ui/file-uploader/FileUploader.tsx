import {useContext} from 'react';
import {Platform} from 'react-native';
import {PdfDocumentContext} from '~/4_entities/file';
import {RNButton, RNModal, RNFilePicker, WebFilePicker} from '~/5_shared/ui';

type FileUploaderProps = {
  isOpen: boolean;
  onClose: () => void;
  onChange: (e: React.ChangeEvent) => void;
};

export function FileUploader(props: FileUploaderProps) {
  const {isOpen, onClose, onChange} = props;
  const {setRnData} = useContext(PdfDocumentContext);

  return (
    <RNModal isOpen={isOpen} onClose={onClose}>
      {Platform.OS !== 'web' ? (
        <RNFilePicker onChange={setRnData} />
      ) : (
        <WebFilePicker onChange={onChange} />
      )}
      <RNButton title="Закрыть" color="#3667c9" onPress={onClose} />
    </RNModal>
  );
}
