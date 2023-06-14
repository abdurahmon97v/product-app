import { useQuery } from "react-query";
import { request } from "../../utils/request";
// items;

export const useGetProduct = (page = 1) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: () =>
      request
        .get("/variations", { params: { page, limit: 30 } })
        .then((res) => res.data),
  });
};
