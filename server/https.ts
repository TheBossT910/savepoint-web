// Taha Rashid
// Sept 13, 2025

import axios from "axios";
import config from "./config";

const https = axios.create({
    baseURL: config.apiUrl
});

export default https;