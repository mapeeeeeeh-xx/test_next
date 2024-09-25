import jwt from "jsonwebtoken";

// Create a token
export const createToken = (userID: any) => {
  return jwt.sign({ userID }, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
};

// Verify a token
export const verifyToken = (token: any) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (err) {
    throw new Error("Invalid token");
  }
};
