import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewProducts.css';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import { FaShoppingCart } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Menurow from './Menurow';
import Navbar from './components/Navbar/Navbar';
import TakeCart from './TakeCart';


const Takeaway = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchCategories();
    fetchAllProducts(); // Fetch all products when the component mounts
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8081/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8081/listProduct');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`http://localhost:8081/products/${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error(`Error fetching products for ${category} category:`, error);
    }
  };

  const handleCategoryClick = (category) => {
    if (category === 'all') {
      fetchAllProducts();
    } else {
      fetchProductsByCategory(category);
    }
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      const newCartItem = { ...product, quantity: 1 };
      setCart([...cart, newCartItem]);
    }

    setCartCount(cartCount + 1);

    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        marginTop: '150%', 
      },
    });
  };

  const handleIncreaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    );
    setCart(updatedCart.filter(item => item.quantity > 0)); // Remove items with quantity 0
    setCartCount(Math.max(0, cartCount - 1)); 
  };
  

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const renderCart = () => {
    return <TakeCart cart={cart} onIncrease={handleIncreaseQuantity} onDecrease={handleDecreaseQuantity} onClose={toggleCart} />;
  };

  return (
    <> 
    <Navbar/>
    <br/> <br/> <br/> <br/>
    <Menurow/>
      <div style={{ textAlign: 'right', margin: '10px', position: 'relative' }}>
        <FaShoppingCart size={30} onClick={toggleCart} style={{ cursor: 'pointer' }} />
        {cartCount > 0 && !showCart && (
          <span style={{ position: 'absolute', top: '-5px', right: '-5px', fontSize: '14px', background: 'red', borderRadius: '50%', width: '20px', height: '20px', textAlign: 'center', color: 'white' }}>
            {cartCount}
          </span>
        )}
      </div>

      {showCart && renderCart()}
      <div className="category-list" style={{ display: "flex", marginLeft: "20%"}}>
        <div key="all" className="category-card" onClick={() => handleCategoryClick('all')}>
          <button style={{borderRadius: "2rem"}}><h2 >All</h2></button>
        </div>
        {categories.map((category) => (
          <div key={category} className="category-card" onClick={() => handleCategoryClick(category)}>
            <button style={{borderRadius: "2rem"}}><h2 >{category}</h2></button>
          </div>
        ))}

        
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              alt=""
              src={`data:image/jpeg;base64,${product.image}`}
              style={{ width: '100%', height: '50vh' }}
              className="product-image"
              onClick={() => openProductDetail(product)}
            />
            <div className="product-details">
              <div className="product-name" style={{ textAlign: 'center' }}>
                {product.name}
              </div>
              <div className="product-price" style={{ textAlign: 'center' }}>
               Price Rs: {product.price}
              </div>
              <button onClick={() => addToCart(product)} style={{ marginLeft: "20%", borderRadius: "2rem" }}>Add to Cart</button>
            </div>
          </div>
        ))}
        {selectedProduct && <ProductDetail product={selectedProduct} onClose={closeProductDetail} />}
      </div>
    </>
  );
};

export default Takeaway;
