import { redirect } from "next/navigation";

const PaymentForm = ({ id, checkin, checkout, loggedInUser }) => {
  async function handleSubmit(formData) {
    "use server";
    const checkin = formData.get("checkin");
    const checkout = formData.get("checkout");
    const hotelId = id;
    const userId = loggedInUser?._id;
    const res = await fetch(process.env.NEXT_PUBLIC_URL + "/api/auth/payment", {
      method: "POST",
      body: JSON.stringify({
        checkin,
        checkout,
        hotelId,
        userId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    console.log({ data });
    if (data.success) {
      redirect("/bookings");
    }
  }
  return (
    <form className="my-8" action={handleSubmit}>
      <div className="my-4 space-y-2">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={loggedInUser?.name}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={loggedInUser?.email}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <span>Check in</span>
        <h4 className="mt-2">
          <input
            type="date"
            name="checkin"
            value={checkin}
            id="checkin"
            readOnly
          />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <span>Checkout</span>
        <h4 className="mt-2">
          <input
            type="date"
            name="checkout"
            value={checkout.slice(0, checkout.length - 1)}
            id="checkout"
            readOnly
          />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="card" className="block">
          Card Number
        </label>
        <input
          type="text"
          id="card"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="expiry" className="block">
          Expiry Date
        </label>
        <input
          type="text"
          id="expiry"
          autoComplete="on"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="cvv" className="block">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Pay Now ($10)
      </button>
    </form>
  );
};

export default PaymentForm;
