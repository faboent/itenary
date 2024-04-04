import { useState, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import '../components/style.css';

const Activities = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [attractions, setAttractions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    handleSearch(); // Initial fetch when component mounts
  }, [currentPage]); // Re-fetch whenever currentPage changes

  const handleSearch = async () => {
    // Check if there's already a request in progress
    if (!isFetching) {
      setIsFetching(true); // Set flag to true to indicate that a request is in progress

      const url = `https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions?id=eyJ1ZmkiOi0yMDkyMTc0fQ%3D%3D&page=${currentPage}&currency_code=INR&languagecode=en-us&query=${searchQuery}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b8182b0c2cmsh7db026f2f545e5fp185d3cjsn82bd7f90bb03',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setAttractions(result.data.products);
      } catch (error) {
        console.error(error);
      }

      setIsFetching(false); // Reset the flag since request is completed
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bgss ml-4 mr-4 flex-container">
        <div className="content">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0054E4', marginTop: '30px' }} className="flexs flex-container">
            <p className="active hidden lg:flex">Hotels</p>
            <div>
              <input
              style={{width:'40%'}}
                type="text"
                placeholder="Search..."
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-10  text-sm focus:outline-none search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button style={{marginLeft:'20px'}} onClick={handleSearch}>Search</button>
            </div>
          </div>
          <div>
            {/* Display attractions */}
            {attractions.map(attraction => (
              <div className='attraction' key={attraction.id}>
                <img className='image2' src={attraction.primaryPhoto.small} alt={attraction.name} />
                <div className='attractions'>
                  <h3>{attraction.name}</h3>

                </div>
                <button style={{ backgroundColor: '#0054E4', color: 'white', height: '46px', borderRadius: '5px', padding: '10px 20px' }}>Add to itenary</button>
              </div>
            ))}
          </div>
          <div>
            {/* Pagination */}
            <div style={{marginTop:'60px', justifyContent:'space-between'}}>
            <button  style={{ backgroundColor: '#0054E4', color: 'white', height: '46px', borderRadius: '5px', padding: '10px 20px' }} onClick={handlePrevPage}>Previous</button>
            <button  style={{ backgroundColor: '#0054E4', color: 'white', height: '46px', borderRadius: '5px', padding: '10px 20px', marginLeft:'30px' }} onClick={handleNextPage}>Next</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
