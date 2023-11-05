
import React, { useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
} from "mdb-react-ui-kit";

const Image = () => {

    const [photoList, setPhotoList] = useState([]);
    // const [masterList, setMasterList] = useState([]);

    const fetchEquipmentData = async () => {
        const res = await fetch('http://localhost:5000/photo/getall');
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

        <div>
            <MDBContainer className="my-5" style={{ width: '300px' }} >
                <MDBCol >
                    {
                        photoList.map((photo) => (
                            <MDBRow md="12" lg="2" className="mb-4 mb-lg-5" >
                               
                                  
                                    <MDBCardImage 
                                        src={'http://localhost:5000/' + photo.image}
                                        position="top"
                                         style={{ height: "250px"}}
                                    />
                                    <MDBCardBody  className='mt-2 ms-3'>
                                   
                                            <>
                                                <i className="fa-regular fa-heart " />
                                                <i className="fa-regular fa-comment ms-3" />
                                                <i className="fa-regular fa-paper-plane ms-3" />
                                                <i className="fa-regular fa-bookmark ms-3 " />
                                            </>

                                        


                                        {/* <div className="d-flex justify-content-between " style={{backgroundColor:'yellow'}} >


                                            <h5 className="mb-0" style={{
                                                lineHeight: "1em",
                                                height: " 3em",
                                                overflow: "hidden"
                                            }}>{photo.title}</h5>
                                           
                                        </div> */}

                                        <div className="d-flex justify-content-between mt-2">
                                            <p >
                                                <a href="#!" className="text-muted">
                                                    {photo.description}
                                                </a>
                                            </p>
                                            <p className="small text-danger">
                                              
                                            </p>
                                        </div>

                                      


                                    </MDBCardBody>
                                
                            </MDBRow>
                        ))
                    }

                </MDBCol>
            </MDBContainer>

        </div>


    )
}

export default Image