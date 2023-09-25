import {useState} from 'react';
import {pdfjs, Document, Page} from 'react-pdf';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

type PdfReaderProps = {
  data: WebData;
};

export function WebPdfReader(props: PdfReaderProps) {
  const {data = null} = props;

  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({numPages}: {numPages: number}): void {
    setNumPages(numPages);
  }

  const getPages = () => {
    const pages = [];

    for (let i = 0; i < numPages; i++) {
      pages.push(<Page pageNumber={i + 1} key={i + 1} />);
    }

    return pages;
  };

  return (
    <Document
      file={data}
      onLoadSuccess={onDocumentLoadSuccess}
      noData="Добавьте PDF">
      {getPages()}
    </Document>
  );
}
