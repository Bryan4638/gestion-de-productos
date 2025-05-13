import axios from "axios";

interface ApiAdapter {
  baseURL: string;
}

class ApiAdapter {
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  instance = () => {
    return axios.create({
      baseURL: this.baseURL,
      withCredentials: false,
    });
  };

  async get(endpoint: string) {
    return await this.instance().get(`${this.baseURL}${endpoint}`);
  }

  async delete(endpoint: string) {
    return await this.instance().delete(`${this.baseURL}${endpoint}`);
  }
}

export default ApiAdapter;
