import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

interface Coordinates {
  lon: number;
  lat: number;
}

interface City {
  name: string;
  cou_name_en: string;
  timezone: string;
  population: number;
  dem: string;
  modification_date: string;
  coordinates: Coordinates;
}

const CityTable: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    fetchData();
  }, [page]); // Fetch data whenever page changes

  const fetchData = async () => {
    if (isLoading) return; // Avoid multiple simultaneous requests
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100&page=${page}`
      );
      const responseData: { results: City[] } = response.data;
      if (page === 1) {
        setCities(responseData.results); // Set initial data
      } else {
        setCities((prevCities) => [...prevCities, ...responseData.results]); // Append data for subsequent pages
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      tableRef.current &&
      tableRef.current.scrollHeight - tableRef.current.clientHeight <=
      tableRef.current.scrollTop
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (tableRef.current) {
        tableRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []); // Add and remove scroll event listener

  return (
    <div className='relative overflow-x-auto shadow-md'>
      <table className='w-full text-sm text-left rtl:text-right dark:text-gray-300' ref={tableRef}>
        <thead className='text-xs text-gray-700 uppercase dark:text-gray-400'>
          <tr className='px-6 py-3 text-gray-300 dark:bg-gray-800'>
            <th className='px-6 py-3'>City Name</th>
            <th className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>Population</th>
            <th className='px-6 py-3'>Country</th>
            <th className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>DEM</th>
            <th className='px-6 py-3'>Timezone</th>
            <th className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>Modification Date</th>
            <th className='px-6 py-3'>Longitude</th>
            <th className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>Latitude</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city, index) => (
            <tr className='border-b border-gray-200 dark:border-gray-700' key={city.name + index}>
              <td className='px-6 py-3 text-gray-900 cursor-pointer hover:underline'>
                {city.name} <i className='uil uil-external-link-alt text-blue-500'></i>
              </td>
              <td className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>{city.population}</td>
              <td className='px-6 py-3 text-gray-500'>{city.cou_name_en}</td>
              <td className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>{city.dem}</td>
              <td className='px-6 py-3 text-gray-500'>{city.timezone}</td>
              <td className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>{city.modification_date}</td>
              <td className='px-6 py-3 text-gray-500'>{city.coordinates.lon}</td>
              <td className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>{city.coordinates.lat}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default CityTable;










//////////////////////////// OLD CODE ////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// interface Coordinates {
//   lon: number;
//   lat: number;
// }

// interface City {
//   name: string;
//   cou_name_en: string;
//   timezone: string;
//   population: number;
//   dem: string;
//   modification_date: string;
//   coordinates: Coordinates;
// }



// const CityTable: React.FC = () => {
//   const [cities, setCities] = useState<City[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(
//           `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100`
//         );
//         const responseData: { results: City[] } = response.data;
//         console.log('API response:', responseData.results); // Check the response structure
//         setCities(responseData.results);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);



//   return (
//     <div className='relative overflow-x-auto shadow-md '>
//       <table className='w-full text-sm text-left rtl:text-right dark:text-gray-300'>
//         <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 '>
//           <tr className='px-6 py-3 text-gray-300 dark:bg-gray-800 '>
//             <th className='px-6 py-3'>City Name</th>
//             <th className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>Population</th>
//             <th className='px-6 py-3'>Country</th>
//             <th className='px-6 py-3 bg-gray-50 dark:bg-gray-800' >DEM</th>
//             <th className='px-6 py-3'>Timezone</th>
//             <th className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>Modification Date</th>
//             <th className='px-6 py-3'>Longitude</th>
//             <th className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>Latitude</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cities.map((city, index) => (
//             <tr className='border-b border-gray-200 dark:border-gray-700' key={index}>
//               <td className='px-6 py-3 text-gray-900 cursor-pointer hover:underline'> {city.name} <i className='uil uil-external-link-alt text-blue-500'></i></td>
//               <td className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>{city.population}</td>
//               <td className='px-6 py-3 text-gray-500' >{city.cou_name_en}</td>
//               <td className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>{city.dem}</td>
//               <td className='px-6 py-3 text-gray-500'>{city.timezone}</td>
//               <td className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>{city.modification_date}</td>
//               <td className='px-6 py-3 text-gray-500'>{city.coordinates.lon}</td>
//               <td className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>{city.coordinates.lat}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {isLoading && <div>Loading...</div>}
//     </div>
//   );
// };

// export default CityTable;
