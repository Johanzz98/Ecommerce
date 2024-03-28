const styleBox = {
  padding: "1rem",
  margin: "1rem",
  boxShadow: '0 0 1rem #00000025',
  color: "blue",
};

const CartItems = ({ data, delFromCart }) => {

    let {id, name, price, quantity} = data;

  return (
    <div style={styleBox}>
      <h4>{name}</h4>
      <h5>${price}.00 x {quantity} = $ {price * quantity}.00</h5>
      <button onClick={() =>delFromCart(id)}>Eliminar</button>
      <br />
      <button onClick={() =>delFromCart(id,true)}>Eliminar Todos</button>
      <br /> <br />
      <br />
      
    </div>
  );
};

export default CartItems;
