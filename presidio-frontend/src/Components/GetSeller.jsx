import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selletinfo } from '../Redux/AuthReducer/action';
import '../css/getseller.css';

const GetSeller = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { seller, isLoading, isError } = useSelector((store) => store.authreducer);

  useEffect(() => {
    dispatch(selletinfo(id));
  }, [dispatch, id]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading seller information</p>;
  if (!Array.isArray(seller) || seller.length === 0) return <p>No seller information found</p>;

  return (
    <div className="seller-info">
      {seller.map((el) => (
        <div key={el._id} className="seller-card">
          <h2>{el.firstname} {el.lastname}</h2>
          <p><strong>Email:</strong> {el.email}</p>
          <p><strong>Phone:</strong> {el.phoneno}</p>
          <p><strong>Role:</strong> {el.user}</p>
        </div>
      ))}
    </div>
  );
};

export default GetSeller;
