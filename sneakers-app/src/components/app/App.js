import './App.scss';
import "macro-css";

function App() {
  return (
    <div className="app">
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
          <div className='d-flex'>
            <div className='app-card d-flex flex-column'>
              {/* <img alt="like" height={32} width={32} src='../img/liked-card.svg'></img> */}
              <img alt="image" height={112} width={133} src="https://static.insales-cdn.com/images/products/1/890/304333690/5.jpg">
                
              </img>
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <div>
                <p>ЦЕНА:</p>
                <p>12 999 руб.</p>
                <img alt="add"  height={32} width={32} src='../img/add-card.svg'></img>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
