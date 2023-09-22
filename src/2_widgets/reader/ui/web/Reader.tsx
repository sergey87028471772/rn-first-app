import {useContext} from 'react';
import {View} from 'react-native';
import {PdfDocumentContext} from '~/4_entities/file';
import {WebPdfReader} from '~/5_shared/ui/';

export function WebReader() {
  const {data} = useContext(PdfDocumentContext);

  return (
    <View>
      <WebPdfReader data={data} />
    </View>
  );
}
