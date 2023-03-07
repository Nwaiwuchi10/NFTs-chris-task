import React from "react";
import { QrReader } from "react-qr-reader";

const QRreader = () => {
  const handleScan = (data) => {
    if (data) {
      alert(`Scanned QR code with data: ${data}`);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };
  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default QRreader;
