import React, { useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import loaderStore from '../store/loaderStore';

import Button from './Button';
import { RightIcon } from '../assets';
import { Box } from '@mui/material';

const UploadPhotoButton = styled(Button)`
  align-self: flex-end;
  margin-top: 50px;
  padding-right: 30px;
  padding-left: 30px;

  @media (max-width: 1100px) {
    align-self: center;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

interface Uploaded {
  count: number;
  images: string[];
}

const UploadPhoto = observer(() => {
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
            navigate('/order/123/photos', { state: { images: uploaded.images } });
          }
        });
      }
    }
  };

  return (
    <Box display={'flex'} component="form" flexDirection={'column'}>
      <input type="file" style={{ display: 'none' }} ref={fileInput} onChange={handleChange} multiple />
      <UploadPhotoButton endIcon={<RightIcon />} onClick={uploadFile}>
        ЗАГРУЗИТЬ ФОТО
      </UploadPhotoButton>
    </Box>
  );
});

export default UploadPhoto;
