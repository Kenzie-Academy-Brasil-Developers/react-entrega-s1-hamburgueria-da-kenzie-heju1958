import { useEffect, useState } from "react";
import ProductsList from "../src/components/ProductsList/ProductsList.jsx";
import Cart from "./components/Cart/Cart.jsx";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Header } from "../src/styles";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  const [input, setInput] = useState("");

  const [filteredProducts, setFilteredProducts] = useState([]);
  const showProducts = () => {
    if (filteredProducts) {
      const seach = input.toLocaleLowerCase();
      const productInput = products.filter(
        (elem) =>
          elem.name.toLowerCase().includes(seach) ||
          elem.category.toLowerCase().includes(seach)
      );
      setFilteredProducts(productInput);
    }
  };

  const [currentSale, setCurrentSale] = useState([]);
  const handleClick = (obj) => {
    const checkSomeItem = currentSale.find((item) => item.id === obj.id);
    if (checkSomeItem) {
      return toast.error("Produto existente no carrinho");
    }
    toast.success("Produto adicionado no carrinho!");
    setCurrentSale([obj, ...currentSale]);
  };

  const removeItem = (item) => {
    const itemRemovided = currentSale.filter((elem) => elem !== item);
    setCurrentSale(itemRemovided);
  };
  const removeAll = (item) => {
    const allItem = currentSale.filter((elem) => elem === item);
    setCurrentSale(allItem);
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header>
        <img src="./logo.png" alt="logo" />
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          onClick={() => {
            showProducts();
          }}
        >
          Pesquisar
        </button>
      </Header>
      <ProductsList
        products={products}
        handleClick={handleClick}
        filteredProducts={filteredProducts}
      />
      <Cart
        currentSale={currentSale}
        removeItem={removeItem}
        removeAll={removeAll}
      />
    </div>
  );
}

export default App;
