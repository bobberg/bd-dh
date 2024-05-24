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
    <div className="pdf-div" style={{ width: "595px", position: "relative",
  overflow: "hidden !important"}}>
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
      <div className="page-controls" style={{position: "absolute",
      bottom: '4%',
        left: '40%',
        background: '#154273',
        width: '7rem',
        height: '2rem',
        padding: '10px',
        zIndex: 1,
        }}>
          <button
            style={{ backgroundColor: 'transparent', border: 'none', padding: '3px 2px 2px'}}
            onClick={() => onPreviousIconClick(numPages)}
          >
            <PreviousPageIcon />
          </button>
          <span style={{ padding: '1em'}}></span>
          <button
            style={{backgroundColor: 'transparent', border: 'none', padding: '3px 2px 2px'}}
            onClick={() => onDocumentClick(numPages)}
          >
            <NextPageIcon />
          </button>
        </div>
    </div>
  );
};

export default PdfPage;
