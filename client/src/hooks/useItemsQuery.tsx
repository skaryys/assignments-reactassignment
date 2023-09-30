import { useQuery } from '@tanstack/react-query'

export const useItemsQuery = () => {
    const { isLoading, data } = useQuery(
        ['items'],
        async () => await fetch('http://localhost:3000/items').then(async (res) => await res.json())
    )

    return { isLoading, data }
}