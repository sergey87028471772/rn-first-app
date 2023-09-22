type AddFileActionProps = {
  event: React.ChangeEvent;
  setWebData: (newData: string | ArrayBuffer | null) => void;
};

export function addFileAction(props: AddFileActionProps) {
  const {event, setWebData} = props;
  const target = event.target as any;

  const file = target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onloadend = () => {
    const base64Data = reader.result;
    setWebData(base64Data);
  };
}
