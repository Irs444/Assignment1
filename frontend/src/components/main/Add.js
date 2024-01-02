
import React, { useState } from 'react'
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
  
  
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    
    MDBIcon,
    MDBTextArea,
  
  }
    from 'mdb-react-ui-kit';
import  {useFormik}  from 'formik';
import {toast} from 'react-hot-toast';
import Swal from 'sweetalert2';
import app_config from '../../config';

const Add = () => {
    const[selectImage, setSelectImage] = useState(null);
    const[currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('main')));
    const[selImage, setselImage] = useState('');
    const {API_URL} = app_config;

    const uploadeImage = async (e) => {
        const file = e.target.files[0];
        
        setselImage(file);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch(API_URL+"/util/uploadfile",{
            method: "POST",
            body: fd,
        }) .then((res) => {
        if(res.status === 200){
            console.log("file uploaded");
            toast.success('File Uploaded!!');
        }
        });

        
    }

    const addPhoto = useFormik({
        initialValues:{
            name: '',
            description: '',
            price: '',
            user: currentUser._id,
            category: '',
            image: '',
            createdAt: new Date()
        },
        onSubmit: async (values) => {
            values.image = selImage.name;
            console.log(values);

            const res = await fetch(API_URL+'/photo/add',{
                method: 'POST',
                body: JSON.stringify(values),
                headers:{
                    'Content-Type' : "application/json"
                }

            });
            console.log(res.status);
            if (res.status === 200){
                Swal.fire({
                    icon: 'success',
                    text: 'nice',
                    tittle: 'successfully added'                
                })
                

                
            }
            else{
                Swal.fire({
                    icon: 'error',
                    text: 'opps',
                    tittle: 'Somthing wrong'
                })
            }
        },
        
    });
  return(
   <MDBContainer className='my-5 ' >
    <MDBCard style={{width:500, justifyContent:'center'}}>
      
     
        <div >

            {selectImage && (
            <div style={{margin:70 }}>
                <img alt='not found' width={"500px"} src={URL.createObjectURL(selectImage)}/> 
                <br/>
                <button className='btn btn-danger' onClick={() => setSelectImage(null)}>Remove</button>
            </div>
            )}
            

            <br/>
            <br/>
            
          
        </div>

     
    
        <MDBCardBody className='d-flex flex-column'>
            <form onSubmit={addPhoto.handleSubmit}>
                <MDBInput wrapperClass='mb-4' id='name' type='name'
                label= 'Name' value={addPhoto.values.name} onChange={addPhoto.handleChange} className='form-control form-control-lg '/>

                <MDBInput wrapperClass='mb-4' id='description' type='description'
                label= 'Description' value={addPhoto.values.description} onChange={addPhoto.handleChange} />

                {/* <MDBInput wrapperClass='mb-4' id='price' type='price'
                label= 'price' value={addPhoto.values.price} onChange={addPhoto.handleChange} /> */}

                {/* <MDBInput wrapperClass='mb-4' id='category' type='category'
                label= 'category' value={addPhoto.values.category} onChange={addPhoto.handleChange} /> */}

                <button className='btn btn-primary' type='submit' style={{margin:10}}>Save</button>
                <label htmlFor= 'uplode-image' className='btn btn-primary' style={{margin:10}}  >Uploade</label>
            <input hidden id = "uplode-image"   type='file' onChange={uploadeImage}></input>
                {/* <button className='btn btn-primary' type='submit' style={{margin:10}}>Save & Add Another</button>
                <button className='btn btn-primary' type='submit' style={{margin:10}}>Cancel</button> */}
            </form>
        </MDBCardBody>

     
        
    </MDBCard>

   </MDBContainer>
  )
}

export default Add