import React from 'react';
import { Box, Grid } from '@mui/material';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import { observer } from 'mobx-react-lite';

import photoFormStore from '../store/photoFormStore';

import Typography from './Typography';
import Button from './Button';

const OrderTitle = styled(Typography)`
  color: ${props => props.theme.colors.carrotOrange};
`;

interface Props {
  selected?: boolean;
}

const OrderItem = styled(Grid)<Props>`
  width: 47%;
  border: 3px solid ${props => (props.selected ? props.theme.colors.christine : props.theme.colors.silver)};
  border-radius: 12px;
  height: 150px;
  background-color: #f2efef;

  &:hover {
    border-color: ${props => props.theme.colors.christine};
  }

  @media (max-width: 700px) {
    height: 110px;
  }
`;

const OrderButton = styled(Button)`
  @media (max-width: 1100px) {
    display: none;
  }
`;

type select = (key: string, item: string) => void;

const OrderMaterial = (props: { item: string; itemName: string; select: select; selected: string }) => {
  return (
    <>
      <OrderItem
        mt={2}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-evenly'}
        flexDirection={'column'}
        onClick={() => {
          props.select(props.itemName, props.item);
        }}
        selected={props.selected === props.item}
      >
        <Typography fontSize={'20px'}>{props.item}</Typography>
        <OrderButton fontSize={'12px'}>Выбрать</OrderButton>
      </OrderItem>
    </>
  );
};

const OrderShape = (props: { item: string; itemName: string; price: string; selected: string; select: select }) => {
  return (
    <OrderItem
      mt={2}
      display={'flex'}
      alignItems={'center'}
      flexWrap={'wrap'}
      justifyContent={'space-evenly'}
      flexDirection={'column'}
      onClick={() => {
        props.select(props.itemName, props.item);
      }}
      selected={props.selected === props.item}
    >
      <div
        style={{
          width: '30%',
          height: '70%',
          backgroundColor: '#CECDCD',
          margin: '5% auto',
          border: '1px solid #333',
        }}
      />
      <div style={{ width: '35%', textAlign: 'end' }}>
        <Typography fontSize={'20px'}>{props.item}</Typography>
        <Typography fontSize={'12px'}>{props.price}</Typography>
      </div>
      <OrderButton fontSize={'12px'}>Выбрать</OrderButton>
    </OrderItem>
  );
};

const Orders = (props: { title: string; items: JSX.Element[] }) => {
  return (
    <Grid container width={'48%'} mt={5} sx={{ width: { sm: '100%', md: '48%' } }}>
      <OrderTitle fontSize={'24px'}>{props.title}</OrderTitle>
      <Grid container columns={2} width={'100%'} justifyContent={'space-between'}>
        {props.items}
      </Grid>
    </Grid>
  );
};

if (localStorage.getItem('form')) {
  const form = JSON.parse(localStorage.getItem('form') || '{}');
  photoFormStore.select('page', form.page);
  photoFormStore.select('size', form.size);
  photoFormStore.select('frame', form.frame);
  photoFormStore.select('framing', form.framing);
} else {
  localStorage.setItem('form', JSON.stringify(photoFormStore.get()));
}

const PrintPhoto = observer(() => {
  const formSelect = (key: string, value: string) => {
    photoFormStore.select(key, value);
    localStorage.setItem('form', JSON.stringify(photoFormStore.get()));
  };

  return (
    <Formik initialValues={{ ...photoFormStore.form }} onSubmit={(values, { setSubmitting }) => {}}>
      <Form>
        <Box mt={5} display={'flex'} flexDirection={'column'}>
          <Typography variant="h2" fontSize={'32px'}>
            Напечатать фото
          </Typography>
          <Grid container columns={2} justifyContent={'space-between'}>
            <Field name="page">
              {() => (
                <Orders
                  title={'Бумага'}
                  items={[
                    <OrderMaterial
                      item={'Туалетная'}
                      itemName={'page'}
                      selected={photoFormStore.form.page}
                      select={formSelect}
                    />,
                    <OrderMaterial
                      item={'Матовая'}
                      itemName={'page'}
                      selected={photoFormStore.form.page}
                      select={formSelect}
                    />,
                  ]}
                />
              )}
            </Field>
            <Field
              name="size"
              render={() => (
                <Orders
                  title={'Размер'}
                  items={[
                    <OrderShape
                      item={'10x15'}
                      itemName={'size'}
                      price={'10 РУБ'}
                      selected={photoFormStore.form.size}
                      select={formSelect}
                    />,
                    <OrderShape
                      item={'20x35'}
                      itemName={'size'}
                      price={'10 РУБ'}
                      selected={photoFormStore.form.size}
                      select={formSelect}
                    />,
                  ]}
                />
              )}
            />
            <Field
              name="frame"
              render={() => (
                <Orders
                  title={'Рамка'}
                  items={[
                    <OrderMaterial
                      item={'Туалетная'}
                      itemName={'frame'}
                      selected={photoFormStore.form.frame}
                      select={formSelect}
                    />,
                    <OrderMaterial
                      item={'Матовая'}
                      itemName={'frame'}
                      selected={photoFormStore.form.frame}
                      select={formSelect}
                    />,
                  ]}
                />
              )}
            />
            <Field
              name="framing"
              render={() => (
                <Orders
                  title={'Кадрирование'}
                  items={[
                    <OrderShape
                      item={'10x15'}
                      itemName={'framing'}
                      price={'10 РУБ'}
                      selected={photoFormStore.form.framing}
                      select={formSelect}
                    />,
                    <OrderShape
                      item={'20x25'}
                      itemName={'framing'}
                      price={'10 РУБ'}
                      selected={photoFormStore.form.framing}
                      select={formSelect}
                    />,
                  ]}
                />
              )}
            />
          </Grid>
        </Box>
      </Form>
    </Formik>
  );
});

export default PrintPhoto;
