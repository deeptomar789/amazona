import { Link } from 'react-router-dom';
import data from '../data';
function HomeScreen() {
  return (
    <div>
      <h1>Pant Sample</h1>
      <div className="products">
        {data.pant.map((pant) => (
          <div className="product" key={pant.slug}>
            <Link to={`./pant/${pant.slug}`}>
              <img src={pant.image} alt={pant.name} />
            </Link>
            <div className="product-info">
              <Link to={`./pant/${pant.slug}`}>
                <p>{pant.name}</p>
              </Link>
              <p>
                <strong>`${pant.price}`</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      <h1>Shirt Sample</h1>
      <div className="products">
        {data.shirt.map((shirt) => (
          <div className="product" key={shirt.slug}>
            <Link to={`shirt/${shirt.slug}`}>
              <img src={shirt.image} alt={shirt.name} />
            </Link>
            <div className="product-info">
              <Link to={`shirt/${shirt.slug}`}>
                <p>{shirt.name}</p>
              </Link>
              <p>
                <strong>${shirt.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      <h1>Pant Sample</h1>
      <div className="products">
        {data.pant.map((pant) => (
          <div className="product" key={pant.slug}>
            <Link to={`./pant/${pant.slug}`}>
              <img src={pant.image} alt={pant.name} />
            </Link>
            <div className="product-info">
              <Link to={`./pant/${pant.slug}`}>
                <p>{pant.name}</p>
              </Link>
              <p>
                <strong>`${pant.price}`</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      <h1>Shirt Sample</h1>
      <div className="products">
        {data.shirt.map((shirt) => (
          <div className="product" key={shirt.slug}>
            <Link to={`shirt/${shirt.slug}`}>
              <img src={shirt.image} alt={shirt.name} />
            </Link>
            <div className="product-info">
              <Link to={`shirt/${shirt.slug}`}>
                <p>{shirt.name}</p>
              </Link>
              <p>
                <strong>`${shirt.price}`</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      <h1>Shoes Sample</h1>
      <div className="products">
        {data.shoes.map((shoes) => (
          <div className="product" key={shoes.slug}>
            <Link to={`./shoes/${shoes.slug}`}>
              <img src={shoes.image} alt={shoes.name} />
            </Link>
            <div className="product-info">
              <Link to={`./shoes/${shoes.slug}`}>
                <p>{shoes.name}</p>
              </Link>
              <p>
                <strong>${shoes.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      <h1>tShirt Sample</h1>
      <div className="products">
        {data.tshirt.map((tshirt) => (
          <div className="product" key={tshirt.slug}>
            <Link to={`tshirt/${tshirt.slug}`}>
              <img src={tshirt.image} alt={tshirt.name} />
            </Link>
            <div className="product-info">
              <Link to={`tshirt/${tshirt.slug}`}>
                <p>{tshirt.name}</p>
              </Link>
              <p>
                <strong>${tshirt.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
