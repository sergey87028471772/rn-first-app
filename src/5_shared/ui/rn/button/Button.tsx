import {Button} from 'react-native';

export function RNButton(props: React.ComponentProps<typeof Button>) {
  const {title = 'button', color = 'primary', ...other} = props;

  return <Button title={title} color={color} {...other} />;
}
