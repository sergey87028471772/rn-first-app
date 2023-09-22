type AddFileActionProps = {
  event: React.ChangeEvent;
  setData: (newData: string | ArrayBuffer | null) => void;
};

export function addFileAction(props: AddFileActionProps) {
  const {event, setData} = props;
  const target = event.target as any;

  const file = target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onloadend = () => {
    const base64Data = reader.result;
    setData(base64Data);
  };
}
