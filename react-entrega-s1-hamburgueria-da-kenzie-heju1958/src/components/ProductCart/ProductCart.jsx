import { ContainerCart, CategoryCart } from "./stylrs";

const ProductCart = ({ elem, id, removeItem }) => {
  return (
    <ContainerCart key={id}>
      <img src={elem.img} alt="imagem do produto" />
      <p>{elem.name}</p>
      <CategoryCart>{elem.category}</CategoryCart>
      <button onClick={() => removeItem(elem)}>Remover</button>
    </ContainerCart>
  );
};

export default ProductCart;
