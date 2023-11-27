import { getUser } from "./auth/[...thirdweb]";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Handler for the API route.
 * 
 * @param req - The incoming HTTP request object (typed as NextApiRequest).
 * @param res - The HTTP response object (typed as NextApiResponse).
 * @returns A Promise resulting in an HTTP response.
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await getUser(req);

  if (!user) {
    return res.status(401).json({
      message: "Not authorized.",
    });
  }

  return res.status(200).json({
    message: `This is a secret for ${user.address}.`,
  });
};

export default handler;