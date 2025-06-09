// uploadData.js
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import getDownloadURL
import { firestore, storage } from './firebase';

function UploadData() {
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const uploadData = async () => {
    // Upload image to Firebase Storage
    const storageRef = ref(storage, 'images/' + imageFile.name);
    await uploadBytes(storageRef, imageFile);

    // Get download URL of the uploaded image
    const imageUrl = await getDownloadURL(storageRef);

    // Upload image URL to Firestore
    await addDoc(collection(firestore, 'images'), { imageUrl });

    console.log("Image uploaded successfully!");
  };

  return (
    <div style={{backgroundColor:"#345", margin:"0px", padding:"30px" }}>
 <h1 style={{ color:"white", fontSize:"50px" ,boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}> UPLOAD THE SUSPICIOUS IMAGE </h1>
 <br/> 
 <div style={{backgroundColor:"#345", margin:"0px", padding:"30px" , width:"1200px" ,height:"100vh"}}> 
 <center>  
 <label style={{ color:"white", fontSize:"30px" }}>Upload Image : </label>
 <input style={{ color:"white", fontSize:"30px" , }} type="file" onChange={handleImageChange} />
  <br/><br/>
  <button    style={{ backgroundColor:"white", borderRadius:"18px" ,color:"black" ,fontSize:"35px", width:"200px"}}  onClick={uploadData}>UPLOAD</button>
   </center>
    </div>

    </div>
  );
}

export default UploadData;
