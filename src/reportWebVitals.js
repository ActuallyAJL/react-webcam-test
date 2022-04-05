// This is not my original work, but was created by following the tutorial found here:

// https://itnext.io/accessing-the-webcam-with-javascript-and-react-33cbe92f49cb

// All credit for this app goes to Gökhan İpek , @ https://gokhanipek.medium.com/

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
