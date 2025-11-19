import { AsyncHandler } from "../utils/async_handler.js";
import { ApiResponse } from "../utils/api_response.js";

const healthCheck = AsyncHandler(async (req, res) => {
    res.status(200).json(
        new ApiResponse(200, {
            status: "OK",
            message: "Health check is working fine",
        })
    );
});
export { healthCheck };