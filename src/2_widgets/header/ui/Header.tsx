import {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {AddFileContext, addFileAction, FileUploader} from '~/3_features/file';
import {PdfDocumentContext} from '~/4_entities/file';
import {RNButton, RNIcon} from '~/5_shared/ui/';
import {getMainIconBase64} from '~/5_shared/lib/icons';

export function Header() {
  const {isOpen, setIsOpen} = useContext(AddFileContext);
  const {setRnData, setWebData} = useContext(PdfDocumentContext);

  return (
    <View>
      <View style={styles.containerHeader}>
        <RNIcon uri={getMainIconBase64()} />
        <View style={styles.containerHeaderButtons}>
          <RNButton
            title="Сбросить"
            color="#dd0c6b"
            onPress={() => {
              setWebData(null);
              setRnData([]);
            }}
          />
          <View style={styles.containerHeaderButtonsAdd}>
            <RNButton
              title="Добавить"
              color="#0eb268"
              onPress={() => setIsOpen(true)}
            />
          </View>
        </View>
      </View>

      <FileUploader
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onChangeRN={newData => {
          setRnData(newData);
          setIsOpen(false);
        }}
        onChangeWeb={event => {
          addFileAction({event, setWebData});
          setIsOpen(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#960be0',
  },
  containerHeaderButtons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  containerHeaderButtonsAdd: {
    marginLeft: 16,
  },
});
