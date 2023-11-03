
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

const App = () => {
    const[selectImage, setSelectImage] = useState(null);
    const[currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('main')));
    const[selImage, setselImage] = useState('');
    

    const uploadeImage = async (e) => {
        const file = e.target.files[0];
        setselImage(file);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:5000/util/uploadfile",{
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
            tittle: '',
            description: '',
            price: '',
            main: currentUser._id,
            category: '',
            image: '',
            createdAt: new Date()
        },
        onSubmit: async (values) => {
            values.image = selImage.name;
            console.log(values);

            const res = await fetch('http://localhost:5000/photo/add',{
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
   <MDBContainer className='my-5' >
    <MDBCard >
        <MDBRow className='g-0'>
     <MDBCol md='6' >
        <div style={{margin:70}}>

            {selectImage && (
            <div style={{margin:70 }}>
                <img alt='not found' width={"500px"} src={URL.createObjectURL(selectImage)}/> 
                <br/>
                <button onClick={() => setSelectImage(null)}>Remove</button>
            </div>
            )}

            <br/>
            <br/>
            <label htmlFor= 'uplode-image' className='btn btn-primary' style={{marginInline:20}}>Uploade Image</label>
            <input hiddenid = "uplode-image" type='file' onChange={uploadeImage}/>
        </div>

     </MDBCol>
     <MDBCol md='6'>
        <MDBCardBody className='d-flex flex-column'>
            <form onSubmit={addPhoto.handleSubmit}>
                <MDBInput wrapperClass='mb-4' id='tittle' type='tittle'
                label= 'tittle' value={addPhoto.values.tittle} onChange={addPhoto.handleChange} className='form-control form-control-lg'/>

                <MDBInput wrapperClass='mb-4' id='description' type='description'
                label= 'description' value={addPhoto.values.description} onChange={addPhoto.handleChange} />

                <MDBInput wrapperClass='mb-4' id='price' type='price'
                label= 'price' value={addPhoto.values.price} onChange={addPhoto.handleChange} />

                <MDBInput wrapperClass='mb-4' id='category' type='category'
                label= 'category' value={addPhoto.values.category} onChange={addPhoto.handleChange} />

                <button className='btn btn-primary' type='submit' style={{margin:10}}>Save</button>
                <button className='btn btn-primary' type='submit' style={{margin:10}}>Save & Add Another</button>
                <button className='btn btn-primary' type='submit' style={{margin:10}}>Cancel</button>
            </form>
        </MDBCardBody>

     </MDBCol>
        </MDBRow>
    </MDBCard>

   </MDBContainer>
  )
}

export default App