import axios from "axios";
import {
  ErrorResponse,
  SuccessResponse,
} from "../Interfaces/response.interface";
import axiosInstance from "./axiosInstance";

export const fetchData = async <T>(url: string) => {
  try {
    const response = await axiosInstance.get(url);
    if (response.status >= 200 && response.status < 300) {
      return response.data as SuccessResponse<T>;
    } else {
      return {
        statusCode: response.status,
        success: false,
        message: "*Unexpected status code",
      } as unknown as ErrorResponse;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (axios.isCancel(error)) {
      return {
        statusCode: 400,
        success: false,
        message: "*Request is cancelled",
      } as unknown as ErrorResponse;
    } else if (error.response) {
      const { status } = error.response;
      if (status === 401 || status === 400) {
        return {
          statusCode: status,
          success: false,
          message: error?.message || "Unauthorized",
          errorMessages: error.response.data?.errorMessages,
        } as unknown as ErrorResponse;
      } else if (status === 404) {
        return {
          statusCode: status,
          success: false,
          message: "Route not found",
        } as unknown as ErrorResponse;
      } else if (status === 500) {
        return {
          statusCode: status,
          success: false,
          message: "*Internal Server Error",
        } as unknown as ErrorResponse;
      } else {
        return {
          statusCode: status,
          success: false,
          message: "*Other Server Error",
        } as unknown as ErrorResponse;
      }
    } else if (error.request) {
      if (error.code === "ECONNABORTED") {
        return {
          statusCode: 408,
          success: false,
          message: "*Request time out",
        } as unknown as ErrorResponse;
      } else {
        return {
          statusCode: 404,
          success: false,
          message: "*Network Error",
        } as unknown as ErrorResponse;
      }
    } else {
      return {
        statusCode: 400,
        success: false,
        message: error?.message,
      } as unknown as ErrorResponse;
    }
  }
};
