import {getServerSession} from "next-auth";
import {authOptions} from "../pages/api/auth/[...nextauth]";
import jwt from "jsonwebtoken";

async function getTokenInfo(req, res) {
	const session = await getServerSession(req, res, authOptions)
	const authHeader = req.headers.authorization;

	const authToken = session?.token
		? session.token
		: authHeader && authHeader.split(' ')[1]

	try {
		// Verify and decode the token
		return jwt.verify(authToken, process.env.NEXTAUTH_JWT_SECRET);
	} catch (err) {
		throw new Error('Invalid token');
	}
}

export function withTokenInfo(handler) {
	return async (req, res) => {
		try {
			const tokenInfo = await getTokenInfo(req, res);
			req.isAuthenticated = tokenInfo?.id !== undefined && tokenInfo?.name !== undefined
			req.authId = tokenInfo?.id !== undefined && tokenInfo?.id || null
			req.authUser = tokenInfo

			return handler(req, res);
		} catch (err) {
			res.status(401).json({ error: err.message });
		}
	};
}
