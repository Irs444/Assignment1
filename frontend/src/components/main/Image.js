
import React, { useEffect, useState } from 'react';
import './Image.css'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
} from "mdb-react-ui-kit";
import app_config from '../../config';

const Image = () => {

    const [photoList, setPhotoList] = useState([]);
    // const [masterList, setMasterList] = useState([]);
    const {API_URL} = app_config;

    const fetchEquipmentData = async () => {
        const res = await fetch(API_URL+'/photo/getall');
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

        <div style={{ backgroundColor: 'lightblue' }}>

            <MDBContainer className="d-flex justify-content-center" >
                <MDBCol className='col-md-8 col-lg-6 ' >
                    {
                        photoList.map((photo) => (
                            <MDBRow md="12" lg="2" className="mb-2  " >
                                <MDBCard className=' ' >
                                    <div className="d-flex justify-content-start "  >

                                    <i class="fa-brands fa-instagram fa-2x text-warning "></i>
                                        <p>
                                      
                                            <a href='#!' className='text-muted ms-5'>
                                                {photo.user.name}
                                            </a>
                                        </p>

                                    </div>
                                    <MDBCardImage className='my-4 ' 
                                        src={API_URL +'/'+ photo.image}
                                        position=""
                                        style={{ objectFit: 'contain'}}
                                    />
                                    <MDBCardBody className='p-1' >

                                        <div  className='icon' >
                                          <a>  <i className="fa-regular fa-heart  " /></a>
                                          <a>  <i className="fa-regular fa-comment    " /></a>
                                          <a>  <i className="fa-regular fa-paper-plane  " /></a>
                                            {/* <i className="fa-regular fa-bookmark ms-auto   " /> */}
                                        </div>




                                        {/* <div className="d-flex justify-content-between mt-2 " style={{ backgroundColor: 'yellow' }} >


                                            <p>
                                                <a href='#!' className='text-muted'>
                                                    {photo.title}
                                                </a>
                                            </p>

                                        </div> */}

                                        <div className="d-flex justify-content-between mt-4" >
                                            <p >
                                                <a href="#!" className=" text-muted  ">
                                                    {photo.description}
                                                </a>
                                            </p>
                                            <p className="small text-danger">

                                            </p>
                                        </div>




                                    </MDBCardBody>
                                </MDBCard>
                            </MDBRow>
                        ))
                    }

                </MDBCol>
            </MDBContainer>

        </div>


    )
}

export default Image