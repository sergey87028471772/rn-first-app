import {createContext} from 'react';
import {DocumentPickerResponse} from 'react-native-document-picker';

type PdfDocumentContextType = {
  rnData: Array<DocumentPickerResponse>;
  setRnData: React.Dispatch<
    React.SetStateAction<Array<DocumentPickerResponse>>
  >;
  webData: string | ArrayBuffer | null;
  setWebData: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
};

export const PdfDocumentContext = createContext<PdfDocumentContextType>({
  rnData: [],
  setRnData: () => {},
  webData: null,
  setWebData: () => {},
});
