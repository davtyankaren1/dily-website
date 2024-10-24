import "../../../styles/FooterBottom.scss";

const FooterBottom = () => {
  return (
    <div className='footer-bottom'>
      <div className='container'>
        <div className='footer-bottom__inner'>
          <div className='footer-column'>
            <h2>Доска объявлений</h2>
            <ul>
              <li>Объявления</li>
              <li>Магазины</li>
              <li>Благотворительность</li>
              <li>Личный кабинет</li>
            </ul>
          </div>
          <div className='footer-column footer-second-column'>
            <h2>Сервисный центр</h2>
            <ul>
              <li>Что мы чиним</li>
              <li>Адреса сервисных центров</li>
            </ul>
          </div>
          <div className='footer-column'>
            <h2>Интернет-магазин</h2>
            <ul>
              <li>Каталог товаров</li>
              <li>Доставка и оплата</li>
              <li>Корзина</li>
              <li>Личный кабинет</li>
              <li>Контакты</li>
              <li>Вакансии</li>
            </ul>
          </div>
          <div className='footer-column'>
            <h2>Пользователям</h2>
            <ul>
              <li>Гарантии</li>
              <li>Доставка и оплата</li>
              <li>Служба поддержки</li>
              <li>Вопрос-ответ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
