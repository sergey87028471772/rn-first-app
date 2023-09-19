import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RNButton, RNIcon} from '~/5_shared/ui';
import {getMainIconBase64} from '~/5_shared/lib/icons';
import {FileUploader} from '~/4_entities/file';

export function Header() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.containerHeader}>
        <RNIcon uri={getMainIconBase64()} />
        <View style={styles.containerHeaderButtons}>
          <RNButton title="Сбросить" color="#dd0c6b" />
          <View style={styles.containerHeaderButtonsAdd}>
            <RNButton
              title="Добавить"
              color="#0eb268"
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
      </View>

      <FileUploader
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
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
