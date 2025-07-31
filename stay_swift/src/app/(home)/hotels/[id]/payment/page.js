import { auth } from "@/auth";
import PaymentForm from "@/components/payment/PaymentForm";
import { getUserByEmail, singleHotel } from "@/queryes";
import { redirect } from "next/navigation";

const PaymentPage = async ({
  params: { id },
  searchParams: { checkin, checkout }
}) => {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  const loggedInUser = await getUserByEmail(session?.user?.email);
  const hotelInfo = await singleHotel(id, checkin, checkout);
  const hasCheckedInAndCheckedOut = checkin && checkout;

  if (hasCheckedInAndCheckedOut) {
  }
  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">
          You have picked <b>Effotel By Sayaji Jaipur</b> and base price is{" "}
          <b>{}</b>
        </p>
        <PaymentForm
          id={id}
          checkin={checkin}
          checkout={checkout}
          loggedInUser={loggedInUser}
        />
      </div>
    </section>
  );
};

export default PaymentPage;
