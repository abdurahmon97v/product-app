import { useMutation } from "react-query";
import { request } from "../../utils/request";

export const useLogin = () =>
  useMutation({
    mutationFn: (data) =>
      request
        .post("/security/auth_check", data, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        })
        .then((res) => res.data),
  });
