import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import jwt from "jsonwebtoken";
import SocianAuthClient from "@socian/socian-auth-client";
import SOCIAN_AUTH_CLIENT_CONFIG from "../../../SocianAuthSDK/SocianAuthClientConfig";

export const authOptions = {
	// Enable debug messages in the console if you are having problems
	debug: process.env.NODE_ENV === 'development',

	secret: process.env.NEXTAUTH_JWT_SECRET,

	pages: {
		signIn: '/auth/signIn',
	},

	providers: [
		CredentialsProvider({
			id: 'socian_auth_provider',
			name: 'socian_auth_provider',
			credentials: {
				intent_id: { label: 'intent_id', type: 'password' },
				token: { label: 'token', type: 'password' },
			},
			async authorize(credentials, req) {
				const payload = {
					intent_id: credentials.intent_id,
					token: credentials.token,
				};

				const authClient = new SocianAuthClient(SOCIAN_AUTH_CLIENT_CONFIG)

				// Verify the intent id
				const intentVerified = await authClient.verifyIntentId(payload.intent_id)
				if( ! intentVerified ) return  null

				// Get the user information using token
				const tokenUser = await authClient.getUserByToken(payload.token)

				// Return null if user data could not be retrieved
				if ( !tokenUser?.socian_id ) return null

				return tokenUser;
			},
		}),
	],

	callbacks: {
		// called after successful signing
		jwt: async ({ token, user, account, profile, isNewUser}) => {
			const isUserSignedIn = !!user;

			if(isUserSignedIn) {
				token.id = user.socian_id.toString();
			}
			return Promise.resolve(token);
		}, // called whenever session is checked
		session: async ({ session, token }) => {
			const encodedToken = jwt.sign(token, process.env.NEXTAUTH_JWT_SECRET, { algorithm: 'HS256'});
			session.id = token.id;
			session.token = encodedToken;

			return Promise.resolve(session);
		}
	},

	session: {
		strategy: 'jwt',
		maxAge: 24 * 60 * 60, // 1d
	},

	jwt: {
		secret: process.env.NEXTAUTH_JWT_SECRET,
		encryption: true,
	},
}

//Api route function that is returned from next auth
export default NextAuth(authOptions)