import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

const UploadPhoto = () => {
  const [count, setCount] = useState(0);
  const [length, setLength] = useState(0);
  const fileInput = useRef<HTMLInputElement>(null);
  const url = 'http://45.84.227.251:5000/file';
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  useEffect(() => {
    loaderStore.msg(`Загружено ${count + 1} из ${length} фото`);
  });

  const uploadFile = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      const length = event.target.files.length;
      setLength(length);
      loaderStore.active(true, 'Загружено 0 из ' + length + ' фото');
      for (let i = 0; i < length; i++) {
        const formData = new FormData();
        formData.append('file', event.target.files[i]);
        axios.post(url, formData, config).then(() => {
          setCount(count + 1);
        });
      }

      if (count === length) {
        loaderStore.active(false);
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
};

export default UploadPhoto;
