import styled from 'styled-components';

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
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <UploadPhotoButton endIcon={<RightIcon />}>ЗАГРУЗИТЬ ФОТО</UploadPhotoButton>
    </Box>
  );
};

export default UploadPhoto;
