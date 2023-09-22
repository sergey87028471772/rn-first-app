import {Platform} from 'react-native';
import {useState} from 'react';
import {View} from 'react-native';
import {Header} from '~/2_widgets/header';
import {WebReader} from '~/2_widgets/reader/ui';
import {PdfDocumentContext} from '~/4_entities/file';

export function Home() {
  const [data, setData] = useState<string | ArrayBuffer | null>(null);

  return (
    <PdfDocumentContext.Provider value={{data, setData}}>
      <View>
        <Header />
        {Platform.OS === 'web' ? <WebReader /> : null}
      </View>
    </PdfDocumentContext.Provider>
  );
}
