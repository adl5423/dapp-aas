/**
 * Configure the chain
 * 
 * You can connect more than 700 chains, including custom ones. 
 * 
 * To find the name of the chain, erase the "Polygon" portion and type the name of the desired chain you want to implement. 
 * 
 * If you are trying to implement a custom chain, visit https://portal.thirdweb.com/react/react.thirdwebprovider#custom-evm-chains
 * 
*/
import { Polygon } from "@thirdweb-dev/chains"

export const activeChain = Polygon;

/**
 * Add any contracts you want to implement to the dApp (one by one) below this comment, on a format similar to the example.
 * 
 */
export const contractAddressOne = "0x..."
export const contractAddressTwo = "0x..."