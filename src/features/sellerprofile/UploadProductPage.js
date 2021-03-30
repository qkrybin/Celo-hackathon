import * as React from "react";
import { useState } from "react";
import FileUpload from "./utils/FileUpload";
import axios from 'axios';
import { Button } from 'src/components/buttons/Button';
import { useRouter } from "next/router";

function UploadProductPage() {
  const router = useRouter();
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
        //writer: props.user.userData._id,
        title: form.title,
        price: form.price,
        images: Images,
    }
		axios
			.post("/api/product/", variables)
			.then(function () {
				router.push({
					pathname: "/",
				});
			})

  }

  return (
      <div>
        <div onSubmit={onSubmit} >
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
          <Button onClick={onSubmit}>Submit</Button>
        </div>
      </div>
  )
}
export default UploadProductPage;