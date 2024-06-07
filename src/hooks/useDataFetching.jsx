import { useQuery } from "react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDataFetching = (endpoint) => {

    const axiosPublic = useAxiosPublic();

    const { data, isLoading: loading, refetch } = useQuery({
        queryKey: [endpoint],
        queryFn: async () => {
            const res = await axiosPublic.get(endpoint);
            return res.data;
        }
    });

    return { data, loading, refetch };
};

export default useDataFetching;
