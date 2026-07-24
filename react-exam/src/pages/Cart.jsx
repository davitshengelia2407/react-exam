import { removeFromCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "../redux/hooks";
import styles from "./Cart.module.css";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <section className={styles.cart}>
      <h1>Your course cart</h1>
      {items.length === 0 ? <p className={styles.empty}>No courses yet. Add something from the catalog.</p> : (
        <div className={styles.list}>{items.map((item) => <article key={item.id}><div><h2>{item.coursesTitle}</h2><p>{item.lecturer} · {item.duration}</p></div><strong>${item.price}</strong><button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button></article>)}<div className={styles.total}>Total <strong>${total}</strong></div></div>
      )}
    </section>
  );
}

export default Cart;
