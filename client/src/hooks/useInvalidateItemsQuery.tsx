import { useQueryClient } from "@tanstack/react-query";


export const useInvalidateItemsQuery = () => {
    const queryClient = useQueryClient()

    const invalidate = queryClient.invalidateQueries({ queryKey: ["items"]});
    return { invalidate }
}
