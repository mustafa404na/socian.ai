import { useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignInSuccessCallback({ intent_id, token }) {
  const router = useRouter();

  useEffect(() => {
    if (intent_id && token) {
      signIn("socian_auth_provider", {
        intent_id,
        token,
        redirect: false,
      }).then((r) => {
        if (r.ok) {
          router.push("/aidemos");
        } else {
          alert("Failed to login.");
          router.push("/");
        }
      });
    }
  }, [intent_id, token]);

  return (
    <div className={`min-h-screen flex items-center`}>
      <div className={`max-w-5xl mx-auto text-center`}>
        You are signed in through Socian Auth Server. Please wait we are
        redirecting to your destination.
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { intent_id, token } = context?.query;

  return {
    props: {
      intent_id,
      token,
    },
  };
}
