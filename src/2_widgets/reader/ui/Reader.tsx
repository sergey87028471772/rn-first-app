import {useContext} from 'react';
import {View, Platform} from 'react-native';
import {PdfDocumentContext} from '~/4_entities/file';
import {RNPdfReader, WebPdfReader} from '~/5_shared/ui/';

export function Reader() {
  const {rnData, webData} = useContext(PdfDocumentContext);

  return (
    <View>
      {Platform.OS !== 'web' ? (
        <RNPdfReader data={rnData} />
      ) : (
        <WebPdfReader data={webData} />
      )}
    </View>
  );
}
