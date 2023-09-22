import {useState} from 'react';
import {View} from 'react-native';
import {Header} from '~/2_widgets/header';
import {Reader} from '~/2_widgets/reader/';
import {PdfDocumentContext} from '~/4_entities/file';

export function Home() {
  const [rnData, setRnData] = useState<any>([]);
  const [webData, setWebData] = useState<any>();

  return (
    <PdfDocumentContext.Provider
      value={{rnData, setRnData, webData, setWebData}}>
      <View>
        <Header />
        <Reader />
      </View>
    </PdfDocumentContext.Provider>
  );
}
