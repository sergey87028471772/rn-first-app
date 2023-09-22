import {createContext} from 'react';

type PdfDocumentContextType = {
  data: string | ArrayBuffer | null;
  setData: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
};

export const PdfDocumentContext = createContext<PdfDocumentContextType>({
  data: null,
  setData: () => {},
});
