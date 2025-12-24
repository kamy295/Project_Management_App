import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

// const healthCheck = (req, res) => {
// one way
// try {
//   res
//     .status(200)
//     .json(new ApiResponse(200, { message: "Server is running" }));
// } catch (error) {}

// better with Highar order function -> asyncHandler
const healthCheck = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is running" }));
});

export { healthCheck };
