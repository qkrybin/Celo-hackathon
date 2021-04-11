import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import axios from 'axios';
import { useState } from 'react';


function getBase64(file:any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}


function beforeUpload(file: any) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

export default function Uploading (opt:any, setForm:any){
  const [loading, setLoading]=useState(false);
  const [imageUrl, setImageUrl]=useState('' as any);

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      setImageUrl(getBase64(info.file.originFileObj));
      setLoading(false);
    }
    switch(opt){
      case "mainpic":
        setForm({mainpic:imageUrl});
      case "pic1":
        setForm({pic1:imageUrl});
      case "pic2":
        setForm({pic2:imageUrl});
      case "pic3":
        setForm({pic3:imageUrl});
    }
    let formData = new FormData();
      formData.append("file", imageUrl)
      //save the Image we chose inside the Node Server 
      axios.post('/api/market/uploadImage', formData)
          .then(response => {
                if (response.data.success) {
                  alert('Product Successfully Uploaded')
                  } else {
                      alert('Failed to upload Product')
                  }
          })

  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
    
  );
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}

    </Upload>
    
  );
}
