type RNFilePickerProps = {
  onChange: (newData: Array<DocumentPickerResponse>) => void;
};

export function RNFilePicker(props: RNFilePickerProps) {
  console.log('RNFilePicker file has been replaced! Props:', props);
  return <div />;
}
