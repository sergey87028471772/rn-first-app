import {Button} from 'react-native';

type ButtonProps = {
  title?: string;
  color?: string;
};

export function RNButton(props: ButtonProps) {
  const {title = 'button', color = 'primary', ...other} = props;

  return <Button title={title} color={color} {...other} />;
}
