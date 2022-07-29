import ProductCart from "../ProductCart/ProductCart";

import { CartName, Empty, EmptyName, Total, ContainerCard, ContainerAll } from "./styles";

const Cart = ({ currentSale, removeItem, removeAll }) => {
  return (
    <ContainerAll>
      <CartName>Carrinho de compras</CartName>
      {currentSale.length > 0 ? (
        <>
          <ContainerCard>
            {currentSale?.map((elem, id) => (
              <ProductCart elem={elem} key={id} removeItem={removeItem} />
            ))}
          </ContainerCard>
          <Total>
            <span>
              <p>Total</p>
              R$
              {currentSale?.reduce((acc, atual) => {
                return acc + atual.price;
              }, 0)}
            </span>
            <button onClick={() => removeAll(currentSale)}>
              Remover todos
            </button>
          </Total>
        </>
      ) : (
        <Empty>
          <EmptyName>Sua sacola está vazia</EmptyName>
          <p>Adicione itens</p>
        </Empty>
      )}
    </ContainerAll>
  );
};

export default Cart;
