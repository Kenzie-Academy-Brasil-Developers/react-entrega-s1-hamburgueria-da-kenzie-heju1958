import { Card, Position, Name, Price } from "./Product";

const Product = ({ elem, id, handleClick }) => {
  return (
    <>
      <Position key={id}>
        <Card>
          <div>
            <img src={elem.img} alt="imagem do produto" />
          </div>
          <Name>{elem.name}</Name>
          <p>{elem.category}</p>
          <Price>R$ {elem.price}</Price>
          <button value={id} onClick={() => handleClick(elem)}>
            Adicionar
          </button>
        </Card>
      </Position>
    </>
  );
};

export default Product;
