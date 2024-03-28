const styleBox = {
  padding: "1rem",
  margin: "1rem",
  boxShadow: '0 0 1rem #00000025 ',
  color: "blue",
};


const ProductItem = ({ data, addToCart }) => {
  let {id,name,price} = data;
  return (
    <div style={styleBox}>
      <h4>
        {name}
      </h4>
      <h5>${price}.00</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
      
      </div>
  )
}

export default ProductItem;
