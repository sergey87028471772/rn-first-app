import {View} from 'react-native';

type PdfReaderProps = {
  data: string | ArrayBuffer | undefined;
};

export function WebPdfReader(props: PdfReaderProps) {
  console.log('WebPdfReader file has been replaced! Props:', props);
  return <View />;
}
