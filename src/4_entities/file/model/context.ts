import {createContext} from 'react';

type PdfDocumentContextType = {
  rnData: Array<DocumentPickerResponse>;
  setRnData: React.Dispatch<
    React.SetStateAction<Array<DocumentPickerResponse>>
  >;
  webData: WebData;
  setWebData: React.Dispatch<React.SetStateAction<WebData>>;
};

export const PdfDocumentContext = createContext<PdfDocumentContextType>({
  rnData: [],
  setRnData: () => {},
  webData: null,
  setWebData: () => {},
});
