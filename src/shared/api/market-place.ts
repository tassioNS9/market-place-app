import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getBaseURL = () => {
  return Platform.select({
    ios: "http://localhost:3001",
    android: "http://localhost:3001",
  });
};

export const baseURL = getBaseURL();

export class MarketPlaceApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });
    this.setupInterceptors();
  }

  getInstance() {
    return this.instance;
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(
      async (config) => {
        const userData = await AsyncStorage.getItem("marketplace-auth");
        console.log(userData);
        if (userData) {
          const {
            state: { token },
          } = JSON.parse(userData);

          console.log(token);

          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
