import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties,  deleteProperty } from '../Redux/AdminReducer/action';
import "../css/sellerblock.css";
import { Link } from 'react-router-dom';

const SellerBlock = () => {
  const dispatch = useDispatch();
  const { properties, isLoading, isError,count } = useSelector((state) => state.housereducer);

  useEffect(() => {
    dispatch(getProperties);
  }, [dispatch,count]);


  const handleDelete = (propertyId) => {
    dispatch(deleteProperty(propertyId));
  };

  return (
    <div> 
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching properties</p>}
      {properties.length === 0 && !isLoading && !isError && <p>No properties found</p>}
      {properties.length > 0 && (
        <div>
          <h2>Properties</h2>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Place</th>
                <th>Area</th>
                <th>House Type</th>
                <th>No. of Bedrooms</th>
                <th>No. of Bathrooms</th>
                <th>Area Size</th>
                <th>Nearby Railway Station</th>
                <th>Nearby Hospital</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <tr key={property._id}>
                  <td><img width={"30%"} src={property.image} alt="Property" /></td>
                  <td>{property.place}</td>
                  <td>{property.area}</td>
                  <td>{property.housetype}</td>
                  <td>{property.no_bedrooms}</td>
                  <td>{property.no_bathrooms}</td>
                  <td>{property.area_size}</td>
                  <td>{property.nearby_railwaystation}</td>
                  <td>{property.nearby_Hospital}</td>
                  <td>{property.description}</td>
                  <td>
                    <button  ><Link style={{color:"black", textDecoration:"none"}} to={`/edit/${property._id}`}>Edit</Link></button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(property._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SellerBlock;
