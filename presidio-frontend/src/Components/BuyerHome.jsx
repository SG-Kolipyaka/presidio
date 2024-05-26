import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProperties } from '../Redux/AdminReducer/action';
import BuyerCard from './BuyerCard';
import "../css/buyerhome.css";

const BuyerHome = () => {
  const dispatch = useDispatch();
  const { allproperty, isLoading, isError,responseMessage } = useSelector((state) => state.housereducer);
  
  const [filters, setFilters] = useState({ page: 1, limit: 10, place: '', housetype: '' });

  useEffect(() => {
    dispatch(getAllProperties(filters));
  }, [dispatch, filters,responseMessage]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setFilters({ ...filters, page: newPage });
  };

  return (
    <div className="buyer-home">
      <div className="filter-bar">
        <input 
          type="text" 
          name="place" 
          placeholder="Place" 
          value={filters.place} 
          onChange={handleFilterChange} 
        />
        <select name="housetype" value={filters.housetype} onChange={handleFilterChange}>
          <option value="">All Types</option>
          <option value="Flat">Flat</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Row House">Row House</option>
        </select>
      </div>
      <div className="property-list">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading properties</p>}
        {allproperty.length > 0 ? (
          allproperty.map(property => <BuyerCard key={property._id} property={property} />)
        ) : (
          <p>No properties found</p>
        )}
      </div>
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(filters.page - 1)} 
          disabled={filters.page === 1}
          style={{width:"100px" , backgroundColor:"brown"}}
        >
          Previous
        </button>
        <button style={{width:"100px",backgroundColor:"brown",marginLeft:"20px"}} onClick={() => handlePageChange(filters.page + 1)}>Next</button>
      </div>    
    </div>
  );
}

export default BuyerHome;
