import React, { useState, useEffect } from 'react';

export const DataContext = React.createContext();

function DataProvider(props) {
  const [data, setData] = useState(null);

  useEffect(() => {

    async function fetchData() {
      const response = await fetch('http://testlc.lncdoo.com/api/myprofile/events');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={data}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataProvider