import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
// eslint-disable-next-line
import PreviousPageIcon from "../../assets/PreviousPageIcon";
import NextPageIcon from "../../assets/NextPageIcon";
// const DamoresMijnFSV = require("../../data/DamoresMijnFSV.pdf");
// import DamoresMijnFSV from "../../data/DamoresMijnFSV.pdf";
// import DamoresMijnFSV from "../../../public/DamoresMijnFSV.pdf";
// const DamoresMijnFSV = `${process.env.REACT_APP_PUBLIC_URL}/DamoresMijnFSV.pdf`;

// Local if you want to test the pdf file locally - public folder when you want to deploy the app
// const DamoresMijnFSV = `${process.env.REACT_APP_PUBLIC_URL}/DamoresMijnFSV.pdf`;

let DamoresMijnFSV: any = "";
// if development, then use the local pdf file
if (process.env.NODE_ENV === "development") {
  DamoresMijnFSV = require("../../data/DamoresMijnFSV.pdf");
} else {
  // if production, then use the public pdf file
  DamoresMijnFSV = `${process.env.REACT_APP_PUBLIC_URL}/DamoresMijnFSV.pdf`;
}

// log the path to the pdf file
console.log(DamoresMijnFSV);

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.2.67/pdf.min.mjs
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.2.67/pdf.min.mjs`;

const PdfPage = () => {
  const [numPages, setNumPages] = useState<number>(26);
  const [pageNumber, setPageNumber] = useState<number>(5);

  function onDocumentLoadSuccess() {
    setNumPages(numPages);
  }

  function onDocumentLoadError(error: any) {
    console.error("Error loading the document:", error);
  }

  const onDocumentClick = (numPages: number) => {
    console.log("Next clicked");
    setPageNumber(pageNumber + 1);
    return;
  };

  const onPreviousIconClick = (numPages: number) => {
    console.log("Previous icon clicked");
    setPageNumber(pageNumber - 1);
    console.log(DamoresMijnFSV);
    return;
  };

  return (
    <div
      className="pdf-div"
      style={{
        width: "595px",
        position: "relative",
        overflow: "hidden !important",
      }}
    >
      {/* file DamoresMijnFSV load it in react pdf */}
      <Document
        file={DamoresMijnFSV}
        onLoadSuccess={onDocumentLoadSuccess}
        onError={onDocumentLoadError}
      >
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
      <div
        className="page-controls"
        style={{
          position: "absolute",
          bottom: "4%",
          left: "40%",
          background: "#154273",
          width: "7rem",
          height: "2rem",
          padding: "10px",
          zIndex: 1,
        }}
      >
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            padding: "3px 2px 2px",
          }}
          onClick={() => onPreviousIconClick(numPages)}
        >
          <PreviousPageIcon />
        </button>
        <span style={{ padding: "1em" }}></span>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            padding: "3px 2px 2px",
          }}
          onClick={() => onDocumentClick(numPages)}
        >
          <NextPageIcon />
        </button>
      </div>
    </div>
  );
};

export default PdfPage;
