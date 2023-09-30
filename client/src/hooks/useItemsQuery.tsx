import { useQuery } from '@tanstack/react-query'

export const useItemsQuery = () => {
    const { isLoading, error, data } = useQuery(
        ['items'],
        async () => await fetch('http://localhost:3000/items').then(async (res) => await res.json())
    )

    return { isLoading, error, data }
}