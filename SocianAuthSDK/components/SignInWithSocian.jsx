import SocianAuthClient from "@socian/socian-auth-client";
import { SOCIAN_AUTH_SERVER_FRONTEND_BASE_URL } from "@socian/socian-auth-client/dist/SocianAuthClientConfig";
import { build_url } from "@socian/socian-auth-client/dist/SocianAuthHelper";
import SOCIAN_AUTH_CLIENT_CONFIG from "../SocianAuthClientConfig";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

function SignInWithSocian({ children, callback_url, className }) {
  const authClient = new SocianAuthClient(SOCIAN_AUTH_CLIENT_CONFIG);

  if (!authClient) {
    alert("Auth Client is not defined.");
    return null;
  }

  const handleLinkClick = async (e) => {
    e.preventDefault();
    if (!authClient || !callback_url) return false;

    try {
      // Create intent
      const newIntent = await authClient.create_intent(
        "auth.signIn",
        callback_url,
        "json",
        "users.find,users.token.create"
      );
      const newIntentId = newIntent?.intent_id;

      if (!newIntentId)
        throw new Error("Intent Id is not found in the intent object.");

      let signInLink = `${SOCIAN_AUTH_SERVER_FRONTEND_BASE_URL}/auth/signIn`;
      if (callback_url) {
        signInLink = build_url({
          url: signInLink,
          query_object: {
            intent_id: newIntentId,
            callback: APP_URL + callback_url,
          },
        });
      }

      window.location.href = signInLink;
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <button
      type={`button`}
      className={`${className}`}
      onClick={handleLinkClick}
    >
      {children || "Sign In"}
    </button>
  );
}

export default SignInWithSocian;
