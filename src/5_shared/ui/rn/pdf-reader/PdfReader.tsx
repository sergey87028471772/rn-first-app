import {View} from 'react-native';
import Pdf from 'react-native-pdf';
import {DocumentPickerResponse} from 'react-native-document-picker';

type PdfReaderProps = {
  data: Array<DocumentPickerResponse>;
};

export function RNPdfReader(props: PdfReaderProps) {
  const {data} = props;

  return data?.length ? (
    <Pdf
      source={{
        uri: data[0].uri,
      }}
      onLoadComplete={(numberOfPages, filePath) => {
        console.log(`Number of pages: ${numberOfPages}`);
      }}
      onPageChanged={(page, numberOfPages) => {
        console.log(`Current page: ${page}`);
      }}
      onError={error => {
        console.log(error);
      }}
      onPressLink={uri => {
        console.log(`Link pressed: ${uri}`);
      }}
    />
  ) : (
    <View />
  );
}
