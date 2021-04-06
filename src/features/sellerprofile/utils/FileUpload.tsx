import axios from 'axios';
import * as React from "react";
import { useState } from "react";
import Dropzone from "react-dropzone";



function FileUpload(props: any){ 
	const [Images, setImage] = useState([] as any);
  const dropHandler=(files:any)=>{
    const formData = new FormData();
    const config={
        header:{'content-type':'multipart/form-data'}
    }
    formData.append("file",files[0])
    axios
    .post('/api/product/image', formData)
    .then(res=>{
        if(res.data.success){
          setImage([...Images, res.data.image])
          props.refreshFunction([...Images, res.data.image])

        }else{
            alert('fail')
        }
    })
  }
  const onDelete = (image:any) => {
    const currentIndex = Images.indexOf(image);
    const newImages = [...Images]
    newImages.splice(currentIndex, 1)

    setImage(newImages)
    props.refreshFunction(newImages)
  }
  
  return(
    <div style={{display:'flex',justifyContent:'space-between'}}>
      <Dropzone onDrop={dropHandler}>
          {({getRootProps, getInputProps}) => (
              <section>
              <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}
              {...getRootProps()}>
                  <input {...getInputProps()} />
                  drop image
              </div>
              </section>
          )}
      </Dropzone>

      <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll' }}>
      {Images.map((image: any, index: any) => (
        <div onClick={() => onDelete(image[index])}>
          <img style={{ minWidth: '300px', width: '300px', height: '240px' }} src={`http://localhost:5000/${image}`} alt={`productImg-${index}`} />
        </div>
      ))}
      </div>
    </div>

  )
}
export default FileUpload;
/* app.post('api/product/image',(req,res)=>{
    //가져온 이미지 저장
})  
*/