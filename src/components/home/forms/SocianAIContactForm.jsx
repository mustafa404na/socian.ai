import FromBtn from "@/components/ui/FromBtn";
import { useState } from "react";
import ListBox from "./ListBox";

const options = [
  { id: 1, name: "Subject", value: null },
  { id: 2, name: "Subscription", value: "Subscription" },
  { id: 3, name: "Technical Support", value: "Technical Support" },
  { id: 4, name: "Investment", value: "Investment" },
];

export default function SocianAIContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [successResponse, setSuccessResponse] = useState(null);
  const [errorResponse, setErrorResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("/api/contact-request", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    });

    const response = await res;
    const json = response.json();

    if (response.status === 200) {
      setSuccessResponse(
        "Your request has been submitted. we will get back to you soon."
      );
    }

    if (response.status !== 200) {
      setErrorResponse("Unable to send your request. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <form className="space-y-4" onSubmit={handleContactFormSubmit}>
      <div className="mt-5">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          required
          className="block w-full appearance-none rounded-xl border-white/[0.2] border bg-transparent px-5 py-4 placeholder-gray-500 hover:border-white duration-500 text-white shadow-sm focus:outline-none capitalize"
        />
      </div>

      <div className="mt-5">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
          className="block w-full appearance-none rounded-xl border-white/[0.2] border bg-transparent px-5 py-4 placeholder-gray-500 hover:border-white duration-500 text-white shadow-sm focus:outline-none"
        />
      </div>

      <div className="mt-5">
        <ListBox
          options={options}
          onChange={(value) => setSubject(value?.value)}
        />
      </div>

      <div className="mt-5">
        <textarea
          rows={3}
          defaultValue={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          id="message"
          className="block w-full appearance-none rounded-xl border-white/[0.2] border bg-transparent px-5 py-4 placeholder-gray-500 hover:border-white duration-500 text-white shadow-sm focus:outline-none"
          placeholder="Message"
          required
        />
      </div>

      {successResponse && (
        <div className={`px-5 py-4 bg-green-600 rounded-xl`}>
          {successResponse}
        </div>
      )}

      {errorResponse && (
        <div className={`px-5 py-4 bg-red-600 rounded`}>{errorResponse}</div>
      )}

      <div>
        {isLoading && <FromBtn disabled>Sending your request...</FromBtn>}

        {!isLoading && <FromBtn>Submit</FromBtn>}
      </div>
    </form>
  );
}
