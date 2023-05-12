import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Typography from '../components/Typography';

const InfoPage = () => {
  const navigationProps = {
    backLink: '/',
    backLinkName: 'главная',
    forwardLink: '/',
    forwardLinkName: '',
  };

  return (
    <>
      <Header />
      <Content>
        <Navigation navigation={navigationProps} />
        <div style={{ marginTop: '100px' }}>
          <Typography mb={2}>
            Оплата заказов производится только с лицевого счёта аккаунта на cloudrint.ru. Пополните лицевой счёт можно с
            помощью банковского перевода любым из 2-х способов:
          </Typography>
          <Typography mb={2}>
            Заказ будет отправлен на производство если суммы на лицевом счёте будет достаточно для оплаты заказа. Чтобы
            ускорить процесс, вы можете прислать нам через форму обратной связи фотографию или скан оплаченного счёта, и
            мы сразу отправим заказ на печать.
          </Typography>
          <Typography mb={2}>Получение заказа</Typography>
          <Typography mb={2}>
            При оформлении заказа выберите подходящий вам способ и адрес доставки и оплатите заказ. Вы можете
            воспользоваться любым способом доставки, без каких-либо ограничений.
          </Typography>
          <Typography mb={2}>
            Подробнее о способах доставки читайте в разделе «Все способы доставки» Получение закрывающих документов
          </Typography>
          <Typography mb={2}>
            Универсальные передаточные документы отправляются два раза в месяц Почтой России на основании данных вашего
            аккаунта.
          </Typography>
          <Typography mb={2}>
            Наши экземпляры документов (универальный передаточный документ) просим вернуть по адресу: 109316, г. Москва,
            Волгоградский проспект, д. 42, корп. 5, этаж 1, пом. I, ком. 6.3-23H
          </Typography>
          <Typography mb={2}>
            Мы отправляем закрывающие документы Почтой России, если вам необходимо получить документы срочно,
            пожалуйста, обратитесь в справочную службу cloudrint.ru через «форму обратной связи» – мы вышлем подробную
            схему проезда для вашего курьера.
          </Typography>
          <Typography mb={2}>
            Мы рады помогать вам создавать праздник и хорошее настроение сотрудникам и партнёрам! Приятных заказов!
          </Typography>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default InfoPage;
