import axios from 'axios';
import React from 'react';
import { Form } from 'react-bootstrap';

function ImageUploader({ setImage }) {
  const imageUpload = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    axios.post('/api/post/image/upload', formData).then((response) => {
      if (response.data.success) {
        setImage(response.data.filePath);
      }
    });
  };
  return (
    <div>
      <Form.Control
        type="file"
        accept="image/*"
        className="shadow-none"
        onChange={imageUpload}
      />
    </div>
  );
}

export default ImageUploader;
