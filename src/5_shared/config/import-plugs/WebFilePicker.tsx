import {View} from 'react-native';

type FilePickerProps = {
  title?: string;
  fileType?: string;
  onChange: (e: React.ChangeEvent) => void;
};

export function WebFilePicker(props: FilePickerProps) {
  console.log('WebFilePicker file has been replaced! Props:', props);
  return <View />;
}
