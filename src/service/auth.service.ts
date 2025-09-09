import Axios from "../baseURL/Axios.ts";
import {useMutation} from "@tanstack/react-query";

const token = async (data: { phone: string, code: string }) => {
  return await Axios.post(`/auth/token`, data);
};

export const useToken = () => {
  return useMutation({
    mutationFn: token
  });
};

const register = async (data: {
  phone: string, profile: {
    firstName: string,
    lastName: string,
    nationalId: string,
    city: string
  }
}) => {
  return await Axios.post(`/auth/register`, data);
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register
  });
};