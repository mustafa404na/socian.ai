import SocianAuthClient from "@socian/socian-auth-client";
import SOCIAN_AUTH_CLIENT_CONFIG from "../../../SocianAuthSDK/SocianAuthClientConfig";

const authClient = new SocianAuthClient(SOCIAN_AUTH_CLIENT_CONFIG);

export default function SignUpSuccessCallback({ intent_id, intent_id_verified, intent_object, intent_user }){
    return (
        <div>
            <div>
                You are signed up through Socian Auth Server
            </div>

            <pre>{JSON.stringify({
                intent_id,
                intent_id_verified,
                intent_object,
                intent_user
            }, null, 4)}</pre>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { intent_id, token } = context?.query;

    const intent_id_verified = intent_id !== undefined && token !== undefined
        ? await authClient.verifyIntentId(intent_id)
        : false

    const intent_user = token ? await authClient.getUserByToken(token) : null

    return {
        props: {
            intent_id: intent_id || null,
            intent_id_verified: intent_id_verified || false,
            intent_object: intent_id_verified === true ? authClient.getIntent() : null,
            intent_user: intent_user
        },
    }
}