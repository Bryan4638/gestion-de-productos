import { BASE_URL } from "@/conf";
import ApiAdapter from "@/libs/adapters/ApiAdapter";

const api = new ApiAdapter(BASE_URL);

export default api;
