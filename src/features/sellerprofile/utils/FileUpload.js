import *as React from "react";
import { useState } from "react";
import Dropzone from "react-dropzone";
import {Icon} from 'antd';
import axios from 'axios';

function FileUpload(){ 
	const [Images, setImage] = useState([]);
  const dropHandler=(files)=>{
    let formData=new FormData();
    const config={
        header:{'content-type':'multipart/form-data'}
    }
    formData.append("file",files[0])
    axios
    .post('/api/product/image', formData,config)
    .then(res=>{
        if(res.data.success){
          setImages([...Images, response.data.image])
          props.refreshFunction([...Images, response.data.image])

        }else{
            alert('fail')
        }
    })
  }
  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images]
    newImages.splice(currentIndex, 1)

    setImages(newImages)
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
                  <Icon type="plus" style={{fontSize:'3rem'}}/>
              </div>
              </section>
          )}
      </Dropzone>

      <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll' }}>
      {Images.map((image, index) => (
        <div onClick={() => onDelete(image)}>
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

        {Images.map((image,index)=>(
          <img src={`http://localhost:8080/${image}`}/>

          ))}


                  axios
        .post('/api/product/image', formData,config)
        .then(res=>{
            if(res.data.success){
              setImage([...Images,res.data.filePath]);
            }else{
                alert('fail')
            }
        })
*/