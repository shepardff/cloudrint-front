import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, useFormikContext, FieldProps } from 'formik';
import { Box, TextField, Autocomplete, CircularProgress } from '@mui/material';
import styled from 'styled-components';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Typography from '../components/Typography';

const StyledInput = styled.input`
  border: 0;
  outline: none;
  border-bottom: 2px solid ${props => props.theme.colors.christine};
  margin-bottom: 20px;
  padding: 10px 0;
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeight};
`;

interface OrderValues {
  address: string;
  phone: string;
}

const sleep = (delay = 0) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
};

const getDadata = async (values: string) => {
  const API_KEY = '972f7a40e88470013cd7554f68a328625a0fc5ab';
  const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
  const token = `${API_KEY}`;
  const requestOptions: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + token,
    },
    body: JSON.stringify({ query: values }),
  };

  const response = await fetch(url, requestOptions);
  return response;
};

interface DadataProps {
  getAddresses: (val: string) => void;
}

const UseDadata = ({ getAddresses }: DadataProps) => {
  const { values } = useFormikContext<OrderValues>();

  React.useEffect(() => {
    getDadata(values.address)
      .then(res => res.text())
      .then(res => getAddresses(res));
  }, [values]);
  return null;
};

interface Addresses {
  value: string;
}

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([] as Addresses[]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const navigationProps = {
    backLink: '/order/photos',
    backLinkName: 'фотографии',
    forwardLink: '/',
    forwardLinkName: 'на хуй',
  };

  const initialValues: OrderValues = { address: '', phone: '' };

  const getAddresses = (val: string) => {
    if (JSON.parse(val).suggestions) {
      const address = JSON.parse(val).suggestions.map((item: any) => {
        return { value: item.value };
      });
      setOptions(address);
    }
  };

  return (
    <>
      <Header />
      <Content>
        <Navigation navigation={navigationProps} />
        <Typography fontSize={'18px'} mt={4}>
          ОФОРМЛЕНИЕ ЗАКАЗА
        </Typography>
        <Box component="div" mt={4}>
          <Typography mt={1}>Заказ фотографий 10Х15 Глянец 11 шт - 300 РУБ</Typography>
          <Typography mt={1}>Доставка - 100 РУБ</Typography>
        </Box>
        <Formik initialValues={initialValues} onSubmit={(values, { setSubmitting }) => {}}>
          <Form>
            <Box mt={4} sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', sm: '100%', md: '40%' } }}>
              <UseDadata getAddresses={getAddresses} />
              <Field name="address" type="text">
                {({ field }: FieldProps) => (
                  <Autocomplete
                    disablePortal
                    id="address"
                    open={open}
                    onOpen={() => {
                      setOpen(true);
                    }}
                    onClose={() => {
                      setOpen(false);
                    }}
                    loading={loading}
                    freeSolo
                    options={options}
                    getOptionLabel={option => option.value}
                    filterOptions={x => x}
                    sx={{ marginBottom: '20px' }}
                    renderInput={params => {
                      return (
                        <TextField
                          {...params}
                          label="Адрес"
                          {...field}
                          variant="standard"
                          InputLabelProps={{
                            sx: {
                              fontSize: '16px',
                              fontFamily: 'Open-Sans, sans-serif',
                              fontWeight: '300',
                              color: '#444',
                            },
                          }}
                          InputProps={{
                            ...params.InputProps,
                            sx: {
                              ':before': { borderBottom: '2px solid #e36910' },
                              ':after': { borderBottom: '2px solid #e36910' },
                              ':hover:not(.Mui-disabled):before': { borderBottom: '2px solid #e36910' },
                            },
                            endAdornment: (
                              <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </React.Fragment>
                            ),
                          }}
                        />
                      );
                    }}
                  />
                )}
              </Field>
              <Field name="phone" type="text">
                {({ field }: FieldProps) => <StyledInput placeholder="+7 (___)-___-____" {...field} />}
              </Field>
            </Box>
          </Form>
        </Formik>
        <Box
          mt={4}
          component={'div'}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          }}
          justifyContent={'space-between'}
        >
          <Typography>Доставка осуществляется почтой России</Typography>
          <Typography alignSelf={'flex-end'} sx={{ marginTop: { xs: '20px', sm: '20px', md: '0' } }}>
            ИТОГО: 404 РУБ
          </Typography>
        </Box>
      </Content>
      <Footer />
    </>
  );
};

export default HomePage;
