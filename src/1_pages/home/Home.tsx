import {useState} from 'react';
import {View} from 'react-native';
import {Header} from '~/2_widgets/header';
import {Reader} from '~/2_widgets/reader';

export function Home() {
  const [data, setData] = useState<string | ArrayBuffer | undefined>();

  return (
    <View>
      <Header
        setPdfData={(newData: string | ArrayBuffer | undefined) =>
          setData(newData)
        }
      />
      <Reader data={data} />
    </View>
  );
}
