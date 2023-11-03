
import React, { useEffect, useState } from 'react';
 
const Image = () => {

    const[photoList, setPhotoList] = useState([]);
    // const [masterList, setMasterList] = useState([]);

    const fetchEquipmentData = async () => {
        const res = await fetch('http:localhost:5000/photo/getall');
        console.log(res.status);
        
        const data = await res.json();
        console.log(data);
        // setMasterList(data);
        setPhotoList(data);
    }
    useEffect(() => {
        fetchEquipmentData();

    }, [])


    return (
        
  <div >
{
    photoList.map((photo) => (
    <div className="card" style={{ width: "18rem" }}>
  <img
    src={'http://localhost:5000/photo.image'}
    className="card-img-top"
    alt="Sunset Over the Sea"
  />
  <div className="card-body">
    <p className="card-text">
     {photo.title}
    </p>
  </div>
</div>
))}

</div>

        
    )
}

export default Image