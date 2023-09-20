type AddFileActionProps = {
  event: React.ChangeEvent;
  setPdfData: (newData: string | ArrayBuffer | undefined) => void;
};

export function addFileAction(props: AddFileActionProps) {
  const {event, setPdfData} = props;
  const target = event.target as any;

  const file = target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onloadend = () => {
    const base64Data = reader.result;
    setPdfData(base64Data);
  };
}
