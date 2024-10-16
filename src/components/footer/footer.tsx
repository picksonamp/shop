import style from './footer.module.css'

export default function Footer() {

  let year = new Date()

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footer_sections}>
          <div className={style.footer_section}>
            <h4>О компании</h4>
            <ul>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Карьера</a></li>
              <li><a href="#">Пресса</a></li>
              <li><a href="#">Блог</a></li>
            </ul>
          </div>
          <div className={style.footer_section}>
            <h4>Помощь</h4>
            <ul>
              <li><a href="#">Часто задаваемые вопросы</a></li>
              <li><a href="#">Возврат товара</a></li>
              <li><a href="#">Доставка</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div className={style.footer_section}>
            <h4>Контакты</h4>
            <p>Телефон: +7 (123) 456-78-90</p>
            <p>Email: info@example.com</p>
            <p>Адрес: ул. Примерная, д. 1, г. Москва, Россия</p>
          </div>
          <div className={style.footer_section}>
            <h4>Подписка на новости</h4>
            <form action="#">
              <input className={style.footer_section_input} type="email" placeholder="Введите ваш email" required />
              <button className={style.footer_section_button} type="submit">Подписаться</button>
            </form>
          </div>
        </div>

        <div className={style.footer_bottom}>
          <p>&copy; {year.getFullYear()} Интернет-магазин. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}