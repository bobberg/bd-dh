import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
// eslint-disable-next-line
//const DamoresMijnFSV = require("../../data/DamoresMijnFSV.pdf");
import DamoresMijnFSV from "../../data/DamoresMijnFSV.pdf";
import PreviousPageIcon from "../../assets/PreviousPageIcon";
import NextPageIcon from "../../assets/NextPageIcon";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfPage = () => {
  const [numPages, setNumPages] = useState<number>(26);
  const [pageNumber, setPageNumber] = useState<number>(5);

  function onDocumentLoadSuccess() {
    setNumPages(numPages);
  }

  const onDocumentClick = (numPages: number) => {
    console.log("Next clicked");
    setPageNumber(pageNumber + 1);
    return;
  };

  const onPreviousIconClick = (numPages: number) => {
    console.log("Previous icon clicked");
    setPageNumber(pageNumber - 1);
    return;
  };

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
        <div className="page-controls">
          <button
            className="page-navigation"
            onClick={() => onPreviousIconClick(numPages)}
          >
            <PreviousPageIcon />
          </button>
          <button
            className="page-navigation"
            onClick={() => onDocumentClick(numPages)}
          >
            <NextPageIcon />
          </button>
        </div>
      </Document>
    </div>
  );
};

export default PdfPage;
