import { useState } from "react";
import { Document, Page } from "react-pdf";
import  DamoresMijnFSV from "../../data/ DamoresMijnFSV.pdf"

function PdfPage() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(5);

  function onDocumentLoadSuccess() {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-div">
      <Document file={ DamoresMijnFSV} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}/>
      </Document>
    </div>
  );
}


export default PdfPage;

