// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './ViewProducts.css';
// import CartPage from './CartPage';
// import { FaShoppingCart } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/Navbar/Navbar';
// import HeroImage from './components/HeroImage/HeroImage';
// import bgImage from "./assets/pasta.jpeg";
// import Footer from './components/Footer/Footer';

// const ViewOffers = () => {
//     const [categories, setCategories] = useState([]);
//     const [products, setProducts] = useState([]);
//     const [cart, setCart] = useState([]);
//     const [showCart, setShowCart] = useState(false);
//     const [cartCount, setCartCount] = useState(0);
  
//     useEffect(() => {
//       fetchCategories();
//       fetchAllProducts();
//     }, []);
  
//     useEffect(() => {
//       const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
//       setCartCount(totalCount);
//     }, [cart]);
  
//     const handleAddToCart = (product) => {
//       const existingItem = cart.find(item => item.id === product.id);
//       if (existingItem) {
//         const updatedCart = cart.map(item => {
//           if (item.id === product.id) {
//             return { ...item, quantity: item.quantity + 1 };
//           }
//           return item;
//         });
//         setCart(updatedCart);
//       } else {
//         const newCartItem = { ...product, quantity: 1 };
//         setCart([...cart, newCartItem]);
//       }
//       setCartCount(cartCount + 1); 
//       toast.success(`${product.name} added to cart!`, {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         style: {
//           marginTop: '150%', 
//         },
//       });
//     };
    
//     const handleIncreaseQuantity = (product) => {
//       const updatedCart = cart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCart(updatedCart);
//       setCartCount(cartCount + 1); 
//     };
    
//     const handleDecreaseQuantity = (product) => {
//       const updatedCart = cart.map((item) =>
//         item.id === product.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
//       );
//       setCart(updatedCart);
//       setCartCount(cartCount - 1); 
//     };
    
//     const toggleCart = () => {
//       setShowCart(!showCart);
//       setCartCount(0);
//     };
  
//     const renderCartPage = () => {
//       return <CartPage cart={cart} onIncrease={handleIncreaseQuantity} onDecrease={handleDecreaseQuantity} onClose={toggleCart} />;
//     };
  
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/categories');
//         setCategories(response.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };
  
//     const fetchAllProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/listProduct');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
  
//     const fetchProductsByCategory = async (category) => {
//       try {
//         const response = await axios.get(`http://localhost:8080/products/${category}`);
//         setProducts(response.data);
//       } catch (error) {
//         console.error(`Error fetching products for ${category} category:`, error);
//       }
//     };
  
//     const handleCategoryClick = (category) => {
//       if (category === 'all') {
//         fetchAllProducts();
//       } else {
//         fetchProductsByCategory(category);
//       }
//     };

//   return (
//     <>
//     <Navbar/> 
//     <HeroImage
//         bgImage={bgImage} 
//         heading={["Our ", <span style={{color: "#FF6600"}}>Offers</span>]}
//       />
//       <div style={{ position: 'relative', textAlign: 'right', margin: '10px' }}>
//         <FaShoppingCart size={30} onClick={toggleCart} style={{ cursor: 'pointer' }} />
//         {cartCount > 0 && !showCart && <span style={{ position: 'absolute', top: '0', right: '-8px', fontSize: '14px', background: 'red', borderRadius: '50%', width: '20px', height: '20px', textAlign: 'center', color: 'white' }}>{cartCount}</span>}
//       </div> 
//       {showCart && renderCartPage()}
//       <div className="offer-page" style={{display: "flex", marginLeft: "20%"}}>
//         <div key="all" className="category-card" onClick={() => handleCategoryClick('all')}>
//           <button style={{borderRadius: "2rem"}}><h2 >All</h2></button>
//         </div>
//         {categories.map((category) => (
//           <div key={category} className="category-card" onClick={() => handleCategoryClick(category)}>
//             <button style={{borderRadius: "2rem"}}><h2 >{category}</h2></button>
//           </div>
//         ))}
//       </div>
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img
//               alt=""
//               src={`data:image/jpeg;base64,${product.image}`}
//               style={{ width: '100%', height: 'auto' }}
//               className="product-image"
//             />
//             <div className="product-details" style={{marginTop: "-5%"}}>
//               <div className="product-name" style={{ textAlign: 'center' }}>
//                 {product.name}
//               </div>
//               <div className="product-price" style={{ textAlign: 'center' , marginTop: "-6%"}}> <br/>
//               <div>Discount: {product.discount}%</div>
//                 <div style={{display: "flex"}}>
//                 <div style={{marginLeft: "24%", textDecoration: "line-through"}}>{product.price}</div>
//                 <div style={{marginLeft: "15%"}}> Rs {product.afterdiscountprice}</div>
//                 </div>
//               </div>
//               <button onClick={() => handleAddToCart(product)} style={{marginLeft: "20%", borderRadius: "2rem"}}>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default ViewOffers;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewProducts.css';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import HeroImage from './components/HeroImage/HeroImage';
import bgImage from "./assets/pasta.jpeg";
import Footer from './components/Footer/Footer';
import CartPage from './CartPage';

const ViewOffers = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [cartCount, setCartCount] = useState(0);
  
    useEffect(() => {
      fetchCategories();
      fetchAllProducts();
    }, []);
  
    useEffect(() => {
      const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(totalCount);
    }, [cart]);
  
    const handleAddToCart = (product) => {
      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem) {
        const updatedCart = cart.map(item => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
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
      setCartCount(cartCount + 1); 
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
    
    
  
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
  
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/listProduct');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    const fetchProductsByCategory = async (category) => {
      try {
        const response = await axios.get(`http://localhost:8080/products/${category}`);
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
  
    const renderCart = () => {
      return (
        <div className={`cart-overlay ${showCart ? 'open' : 'closed'}`}>
          <CartPage 
            cart={cart} 
            onIncrease={handleIncreaseQuantity} 
            onDecrease={handleDecreaseQuantity} 
            onClose={toggleCart} 
          />
        </div>
      );
    };
  
    return (
      <>
        <Navbar/> 
        <HeroImage
          bgImage={bgImage} 
          heading={["Our ", <span style={{color: "#FF6600"}}>Offers</span>]}
        />
        <div style={{ position: 'relative', textAlign: 'right', margin: '10px' }}>
          <FaShoppingCart size={30} onClick={toggleCart} style={{ cursor: 'pointer' }} />
          {cartCount > 0 && !showCart && <span style={{ position: 'absolute', top: '0', right: '-8px', fontSize: '14px', background: 'red', borderRadius: '50%', width: '20px', height: '20px', textAlign: 'center', color: 'white' }}>{cartCount}</span>}
        </div> 
        {showCart && (
      <div className="cart-overlay open">
        <CartPage 
          cart={cart} 
          onIncrease={handleIncreaseQuantity} 
          onDecrease={handleDecreaseQuantity} 
          onClose={toggleCart} 
          isOpen={showCart}
        />
      </div>
    )}
        <div className="offer-page" style={{display: "flex", marginLeft: "20%"}}>
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
                style={{ width: '100%', height: 'auto' }}
                className="product-image"
              />
              <div className="product-details" style={{marginTop: "-5%"}}>
                <div className="product-name" style={{ textAlign: 'center' }}>
                  {product.name}
                </div>
                <div className="product-price" style={{ textAlign: 'center' , marginTop: "-6%"}}> <br/>
                <div>Discount: {product.discount}%</div>
                  <div style={{display: "flex"}}>
                  <div style={{marginLeft: "24%", textDecoration: "line-through"}}>{product.price}</div>
                  <div style={{marginLeft: "15%"}}> Rs {product.afterdiscountprice}</div>
                  </div>
                </div>
                <button onClick={() => handleAddToCart(product)} style={{marginLeft: "20%", borderRadius: "2rem"}}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <Footer/>
      </>
    );
};

export default ViewOffers;
