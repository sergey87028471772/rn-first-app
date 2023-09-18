import {Image, StyleSheet} from 'react-native';

type IconProps = {
  uri: string;
};

export function RNIcon(props: IconProps) {
  const {uri, ...other} = props;

  return <Image source={{uri}} style={styles.stretch} {...other} />;
}

const styles = StyleSheet.create({
  stretch: {
    width: 32,
    height: 32,
    resizeMode: 'stretch',
  },
});
