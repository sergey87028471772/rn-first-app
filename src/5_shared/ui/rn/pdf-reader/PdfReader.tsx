import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';
import {DocumentPickerResponse} from 'react-native-document-picker';

type PdfReaderProps = {
  data: Array<DocumentPickerResponse>;
};

export function RNPdfReader(props: PdfReaderProps) {
  const {data} = props;

  console.log(data);
  return data?.length ? (
    <View>
      <Pdf
        source={{
          uri: data[0].fileCopyUri?.replace('file://', ''),
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
        style={styles.pdf}
      />
    </View>
  ) : (
    <View>
      <Text>Добавьте PDF</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pdf: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
