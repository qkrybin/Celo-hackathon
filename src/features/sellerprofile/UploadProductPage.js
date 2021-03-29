import *as React from "react";
import { useState } from "react";
import {FileUpload} from "./FileUpload";


export function UploadProductPage(props) {
  const [form, setForm] = useState({ title: "", price: "" });
  const [Images, setImage] = useState([]);
  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const updateImg=(newImg)=>{
    setImage(newImg)
  }
  const onSubmit = (event) => {
    event.preventDefault();

    const variables = {
        writer: props.user.userData._id,
        title: TitleValue,
        price: PriceValue,
        images: Images,
    }

    Axios.post('/api/product/uploadProduct', variables)
        .then(response => {
            if (response.data.success) {
                alert('Product Successfully Uploaded')
                props.history.push('/')
            } else {
                alert('Failed to upload Product')
            }
        })
  }

  return (
      <div>
          <FileUpload refreshFunction={updateImg}/>
          <input               
            name="title"
            type="text"
            value={form.title}
          onChange={handleFormChange}/>
          <input               
            name="price"
            type="text"
            value={form.price}
          onChange={handleFormChange}/>
          <Button onClick={onSubmit}>등록</Button>
      </div>
  )
}
export default UploadProductPage;