import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import "./Cart.css";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <section className="cartPage">
      <h1>Your Cart</h1>

      {items.length === 0 ? (
        <p className="emptyCart">No courses in cart yet.</p>
      ) : (
        <div className="cartList">
          {items.map((item) => (
            <article key={item.id} className="cartItem">
              <div>
                <h2>{item.coursesTitle || item.courseTitle}</h2>
                <p>
                  {item.lecturer} · {item.duration}
                </p>
              </div>
              <strong>${item.price}</strong>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </article>
          ))}

          <div className="cartTotal">
            Total: <strong>${total}</strong>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
