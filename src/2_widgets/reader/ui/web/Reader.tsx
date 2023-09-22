import {useContext} from 'react';
import {Platform} from 'react-native';
import {View} from 'react-native';
import {PdfDocumentContext} from '~/4_entities/file';
import {PdfReader} from '~/5_shared/ui/web/pdf-reader';

export function Reader() {
  const {data} = useContext(PdfDocumentContext);

  return (
    <View>{Platform.OS === 'web' ? <PdfReader data={data} /> : null}</View>
  );
}
