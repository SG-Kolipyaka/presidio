import React from 'react';
import "../css/buyercard.css";
import { useDispatch } from 'react-redux';
import { editlikesProperty } from '../Redux/AdminReducer/action';
import { Link } from 'react-router-dom';

const BuyerCard = ({ property }) => {
  const dispatch=useDispatch()

  const editlikes=(id)=>{
    dispatch(editlikesProperty(id))
  }

  return (
    <div className="buyer-card">
      <img src={property.image} alt="Property" />
      <h3>Place : {property.place}</h3>
      <p>House Type: {property.housetype}</p>
      <p>No Bedrooms: {property.no_bedrooms} Bedrooms</p>
      <p>No Bathrooms:  {property.no_bathrooms} Bathrooms</p>
      <p>Area Size: {property.area_size}</p>
      <p>Nearest Railway Station: {property.nearby_railwaystation}, {property.nearby_Hospital}</p>
      <p>Description: {property.description}</p>
      <button onClick={() => editlikes(property._id)} style={{color:"white", backgroundColor:"brown"}}>Likes {property.like}</button>
      <button style={{color:"white", backgroundColor:"green"}}><Link style={{color:"black", textDecoration:"none"}} to={`/getseller/${property.userId}`}>I am Interested</Link></button>
    </div>
  );
}

export default BuyerCard;
