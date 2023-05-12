import React, { useRef } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import loaderStore from '../store/loaderStore';

import Button from './Button';

interface Uploaded {
  count: number;
  images: string[];
}

interface Props {
  buttonText: string;
  icon?: React.ReactElement;
  className?: string;
}

const UploadPhoto = observer((props: Props) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const url = 'http://127.0.0.1:5000/file';
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  const navigate = useNavigate();

  const uploadFile = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      const length = event.target.files.length;
      loaderStore.active(true, 'Загружено 0 из ' + length + ' фото');

      const uploaded: Uploaded = { count: 0, images: [] };

      if (localStorage.getItem('images')) {
        uploaded.images.push(...JSON.parse(localStorage.getItem('images') || '{}'));
      }

      for (let i = 0; i < length; i++) {
        const formData = new FormData();

        formData.append('file', event.target.files[i]);

        axios.post(url, formData, config).then(res => {
          uploaded.count++;
          uploaded.images.push(res.data.file_id);

          localStorage.setItem('images', JSON.stringify(uploaded.images));

          loaderStore.msg('Загружено ' + uploaded.count + ' из ' + length + ' фото');

          if (uploaded.count === length) {
            loaderStore.active(false);
            navigate('/order/photos');
            window.location.reload();
          }
        });
      }
    }
  };

  return (
    <>
      <input type="file" style={{ display: 'none' }} ref={fileInput} onChange={handleChange} multiple />
      <Button className={props.className} endIcon={props.icon} onClick={uploadFile}>
        {props.buttonText}
      </Button>
    </>
  );
});

export default UploadPhoto;
