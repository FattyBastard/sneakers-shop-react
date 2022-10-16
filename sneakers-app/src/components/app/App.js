import './App.scss';
import "macro-css";
import Card from '../card/card';

function App() {
  return (
    <div className="app clear">
      <div className='app-mainblock'>
        <header className="app-header d-flex justify-content-between pr-50">
          <div className='left-part d-flex'>
            <img className='header-logo' alt="logo" src='../img/logo.svg'></img>
            <div className='flex-column'>
              <h6>REACT SNEAKERS</h6>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className='right-part d-flex align-items-center'>
            <li className='mr-30'>
              <a>
                <img alt="cart" src='../img/cart.svg' className='mr-10'></img>
              </a>
              <span>1205 руб.</span>
            </li>
            <li className='mr-30'>
              <a>
                <img alt="heart" src='../img/heart.svg'></img>
              </a>
            </li>
            <li className=''>
              <a>
                <img alt="profile" src='../img/profile.svg'></img>
              </a>
            </li>
          </ul>
        </header>
        <div className='pl-45 pr-50 pt-50'>
          <h4 className='fw-bold pb-40'>Все кроссовки</h4>
          <div className='d-flex justify-between flex-wrap'>
            <Card img={"https://static.insales-cdn.com/images/products/1/890/304333690/5.jpg"}
                  info={"Мужские Кроссовки Nike Blazer Mid Suede"}
                  price={"12 999 руб."}/>
            <Card img={"https://russiangolfer.ru/2270-thickbox_default/krossovki-nike-wmns-lunar-control-vapor-2.jpg"}
                  info={"Мужские Кроссовки Nike lore lorem"}
                  price={"12 999 руб."}/>
            <Card img={"https://ae04.alicdn.com/kf/HTB1KaLKXvLsK1Rjy0Fbq6xSEXXa6/Xiaying-Smile-2018.jpg"}
                  info={"Мужские Кроссовки Nike lore lorem"}
                  price={"12 999 руб."}/>
            <Card img={"https://nike-off.ru/wp-content/uploads/2018/09/DSCN8572.jpg"}
                  info={"Мужские Кроссовки Nike lore lorem"}
                  price={"12 999 руб."}/>
            <Card img={"https://nike-off.ru/wp-content/uploads/2018/09/DSCN8572.jpg"}
                  info={"Мужские Кроссовки Nike lore lorem"}
                  price={"12 999 руб."}/>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
