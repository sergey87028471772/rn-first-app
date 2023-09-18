import {Header} from '~/2_widgets/header';

type HomeProps = {
  auth?: boolean;
};

export function Home(props: HomeProps) {
  const {auth} = props;

  return <Header />;
}
