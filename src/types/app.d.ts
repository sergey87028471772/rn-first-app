declare global {
  export type DocumentPickerResponse = {
    uri: string;
    name: string | null;
    copyError?: string;
    fileCopyUri: string | null;
    type: string | null;
    size: number | null;
  };

  export type WebData = string | ArrayBuffer | null;
}

export {};
