import React, { useState ,useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { editProperty,counts } from '../Redux/AdminReducer/action';
import { useParams } from 'react-router-dom';
import "../css/edit.css";

const initialState={
    place: '',
    area: '',
    housetype: '',
    no_bedrooms: '',
    no_bathrooms: '',
    area_size: '',
    nearby_railwaystation: '',
    nearby_Hospital: '',
    description: '',
    image: '', 
    like: ''
  }


const Edit = () => {
  const [formData, setFormData] = useState(initialState);

  const [formErrors, setFormErrors] = useState({});
  const dispatch=useDispatch()
  const {id}=useParams()

  const {responseMessage}=useSelector((state)=>state.housereducer)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const fetchData=(id)=>{
    return fetch(`http://localhost:8080/api/property/specroute/${id}`).then((res)=>res.json()).then((res)=>{
        console.log(res.data)
        setFormData(res.data)
    }).catch((err)=>{
        console.log(err)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(counts());
    const errors = {};
    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      try {
        dispatch(editProperty(formData,id));
    console.log(formData)
        
      } catch (error) {
        console.error('Error creating property:', error);
      }
    }
  };

  useEffect(()=>{
fetchData(id)
  },[])

  return (
    <div className="Edit">
      <h2>Edit Form</h2>
      {responseMessage && <p style={{color:"red"}} className="response-message">{responseMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Place" name="place" value={formData.place} onChange={handleChange} />
        {formErrors.place && <p className="error">{formErrors.place}</p>}
        <input type="text" placeholder="Area" name="area" value={formData.area} onChange={handleChange} />
        {formErrors.area && <p className="error">{formErrors.area}</p>}
        <select name="housetype" value={formData.housetype} onChange={handleChange}>
          <option value="">Select House Type</option>
          <option value="Flat">Flat</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Row House">Row House</option>
        </select>
        {formErrors.housetype && <p className="error">{formErrors.housetype}</p>}
        <input type="number" placeholder="No. of Bedrooms" name="no_bedrooms" value={formData.no_bedrooms} onChange={handleChange} />
        {formErrors.no_bedrooms && <p className="error">{formErrors.no_bedrooms}</p>}
        <input type="number" placeholder="No. of Bathrooms" name="no_bathrooms" value={formData.no_bathrooms} onChange={handleChange} />
        {formErrors.no_bathrooms && <p className="error">{formErrors.no_bathrooms}</p>}
        <input type="text" placeholder="Area Size" name="area_size" value={formData.area_size} onChange={handleChange} />
        {formErrors.area_size && <p className="error">{formErrors.area_size}</p>}
        <input type="text" placeholder="Nearby Railway Station" name="nearby_railwaystation" value={formData.nearby_railwaystation} onChange={handleChange} />
        {formErrors.nearby_railwaystation && <p className="error">{formErrors.nearby_railwaystation}</p>}
        <input type="text" placeholder="Nearby Hospital" name="nearby_Hospital" value={formData.nearby_Hospital} onChange={handleChange} />
        {formErrors.nearby_Hospital && <p className="error">{formErrors.nearby_Hospital}</p>}
        <textarea placeholder="Description" name="description" value={formData.description} onChange={handleChange} />
        {formErrors.description && <p className="error">{formErrors.description}</p>}
        <input type="text" placeholder="Enter The Property Image link" value={formData.image} name="image" onChange={handleChange} />
        {formErrors.image && <p className="error">{formErrors.image}</p>}
        <input type="number" placeholder="Like" name="like" value={formData.like} onChange={handleChange} />
        {formErrors.like && <p className="error">{formErrors.like}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Edit;
