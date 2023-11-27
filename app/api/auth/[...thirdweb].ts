import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";

/**
 * Configuration and initialization of Thirdweb's authentication system.
 * 
 * ThirdwebAuth - A function that sets up the authentication handlers, configured with:
 * - domain: A string representing your application's domain. Pulled from environment variables for security.
 * - wallet: An instance of PrivateKeyWallet, initialized with a private key (also from environment variables).
 *   This wallet is crucial for signing transactions/messages in blockchain operations.
 */
export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY || ""),
});
/**
 * Default export of the configured authentication handler.
 * 
 * ThirdwebAuthHandler() - The API route handler for managing authentication requests in Next.js.
 * This handler will be used in the API routes of the Next.js application to process authentication-related requests.
 */
export default ThirdwebAuthHandler();