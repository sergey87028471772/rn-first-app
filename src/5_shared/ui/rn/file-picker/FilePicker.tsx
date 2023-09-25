import {Button} from 'react-native';
import DocumentPicker, {
  isCancel,
  isInProgress,
  types,
} from 'react-native-document-picker';

type RNFilePickerProps = {
  title?: string;
  onChange: (newData: Array<DocumentPickerResponse>) => void;
};

export function RNFilePicker(props: RNFilePickerProps) {
  const {title = 'Выберите PDF', onChange} = props;

  const handleError = (err: unknown) => {
    if (isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  return (
    <Button
      title={title}
      onPress={async () => {
        DocumentPicker.pick({
          type: types.pdf,
          copyTo: 'cachesDirectory',
        })
          .then(onChange)
          .catch(handleError);
      }}
    />
  );
}
