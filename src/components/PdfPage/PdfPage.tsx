import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
// eslint-disable-next-line
const DamoresMijnFSV = require("../../data/DamoresMijnFSV.pdf");

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfPage = () => {
  const [numPages, setNumPages] = useState(26);
  const [pageNumber, setPageNumber] = useState(5);

  function onDocumentLoadSuccess() {
    setNumPages(numPages);
  }

  function onDocumentClick(numPages: number) {
    setPageNumber(pageNumber + 1);
  }

  return (
    <div className="pdf-div" style={{ width: "595px" }}>
      <Document file={DamoresMijnFSV} onLoadSuccess={onDocumentLoadSuccess}>
        {pageNumber <= numPages ? (
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            onClick={onDocumentClick}
          />
        ) : (
          (setPageNumber(1), (<p>End of document reached.</p>))
        )}
      </Document>
    </div>
  );
};

export default PdfPage;
