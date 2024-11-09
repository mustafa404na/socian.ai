import FromBtn from "@/components/ui/FromBtn";
import { useState } from "react";

export default function SocianSubscriptionForm() {
  const [email, setEmail] = useState("");
  const [successResponse, setSuccessResponse] = useState(null);
  const [errorResponse, setErrorResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const subsHandleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("/api/subscribe-email-request", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
    });

    const response = await res;
    const json = response.json();

    if (response.status === 200) {
      setSuccessResponse("We will get back to you soon.");
    }

    if (response.status !== 200) {
      setErrorResponse("Unable to send your request. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <form
      className="sm:flex sm:max-w-md lg:mt-0 flex flex-col lg:w-1/2"
      onSubmit={subsHandleSubmit}
    >
      <div className="md:flex lg:flex-row flex-col">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="block w-full appearance-none rounded-xl border-white/[0.2] border bg-transparent px-5 py-4 placeholder-gray-500 hover:border-white d text-white shadow-sm focus:outline-none"
          placeholder="Email"
        />
        <div className="sm:ml-4 sm:flex-shrink-0 md:mt-0 mob:mt-6">
          {isLoading ? (
            <FromBtn disabled weight={"150px"}>
              Wait ...
            </FromBtn>
          ) : (
            <FromBtn weight={"150px"}>Subscribe</FromBtn>
          )}
        </div>
      </div>
      {successResponse && (
        <div className={`px-5 py-4 bg-green-600 rounded-xl mt-3`}>
          {successResponse}
        </div>
      )}

      {errorResponse && (
        <div className={`px-5 py-4 bg-red-600 rounded`}>{errorResponse}</div>
      )}
    </form>
  );
}
