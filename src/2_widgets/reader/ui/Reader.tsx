import {View} from 'react-native';
import {PdfReader} from '~/5_shared/ui';

type PdfReaderProps = {
  data: string | ArrayBuffer | undefined;
};

export function Reader(props: PdfReaderProps) {
  const {data} = props;

  return (
    <View>
      <PdfReader data={data} />
    </View>
  );
}
