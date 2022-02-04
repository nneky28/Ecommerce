import React from "react";
import { useCart } from "react-use-cart";
import { PaystackConsumer } from "react-paystack";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    emptyCart,
    removeItem,
  } = useCart();
  // console.log('items from the cart', items)

  const reference = new Date().getTime().toString();

  let total = Math.round((cartTotal * 0.0075) + (cartTotal));
  // console.log("total", total);
  // let total = (cartTotal + cartTotal) * (0.075 * 100);
  const config = {
    email: "techiesis@example.com",
    amount: `${total *100}`,
    // publicKey: "pk_test_4fedad5180c7c3bef0d5d1b764c4ce546822c62b",
    
    publicKey:"pk_test_19be14a3bf3e9972d76e176f2014f2c0b0ce9cb1"
  };

  const handleSuccess = (reference) => {
    console.log(reference);
    emptyCart();
  };

  const handleClose = () => {
    console.log("closed");
  };
  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };

  const handleSave = ()=>{

  }

  return (
    <>
      <div
        className="modal fade p-5"
        style={{ height: "80%", width: "150%" }}
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog py-5" id="box">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cart({totalUniqueItems})
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {isEmpty ? (
              <h4 className="text-center mt-4">
                your cart is empty, kindly add to cart.
              </h4>
            ) : (
              <div className="modal-footer">
                <table className="box">
                  <h5> Total items:({totalItems})</h5>
                  <tbody>
                    <th></th>
                    <th>Item</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th className="qty">Action</th>
                    {items.map((item, id) => (
                      <tr key={id}>
                        <td>
                          <i
                            onClick={() => removeItem(item.id)}
                            class="fas fa-window-close"
                          />
                        </td>
                        <td>
                          <img
                            style={{ height: "6rem" }}
                            src={item.pic1}
                            alt=""
                            className="img"
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>${item.price}.00</td>
                        <td className="qty">{item.quantity}</td>
                        <td>
                          <button
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                            className="btn btn-primary"
                          >
                            +
                          </button>
                        </td>

                        <td>
                          <button
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                            className="btn btn-info"
                          >
                            -
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text mt-5">
                  <h5 className="total">Total:${cartTotal}:00</h5>
                </div>

                <PaystackConsumer {...componentProps}>
                  {({ initializePayment }) => (
                    <button
                       style={{
                    backgroundColor: "rgb(241, 110, 63)",
                    color: "#fff",
                    border: "1px solid rgb(241, 110, 63)",
                    padding: "7px 150px",
                  }}
                       type="button"
                        class="btn btn-lg btn-info me-5"
                        onClick={() =>
                        initializePayment(handleSuccess,handleSave, handleClose)
                      }
                    >
                       Checkout
                    </button>
                  )}
                </PaystackConsumer> 
                
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
