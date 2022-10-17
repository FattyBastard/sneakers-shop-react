import './App.scss';
import "macro-css";
import Header from '../header';
import Card from '../card/card';

function App() {
  return (
    <div className="app clear">
      <div className='app-mainblock'>
        <Header/>
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
