import {createContext} from 'react';

type AddFileContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type AddFileActionProps = {
  event: React.ChangeEvent;
  setWebData: (newData: WebData) => void;
};

export const AddFileContext = createContext<AddFileContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

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
