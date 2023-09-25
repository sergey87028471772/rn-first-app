import {useState} from 'react';
import {View} from 'react-native';
import {Header} from '~/2_widgets/header';
import {Reader} from '~/2_widgets/reader/';
import {AddFileContext} from '~/3_features/file';
import {PdfDocumentContext} from '~/4_entities/file';

export function Home() {
  const [isOpen, setIsOpen] = useState<any>(false);
  const [rnData, setRnData] = useState<any>([]);
  const [webData, setWebData] = useState<any>();

  return (
    <AddFileContext.Provider value={{isOpen, setIsOpen}}>
      <PdfDocumentContext.Provider
        value={{rnData, setRnData, webData, setWebData}}>
        <View>
          <Header />
          <Reader />
        </View>
      </PdfDocumentContext.Provider>
    </AddFileContext.Provider>
  );
}
