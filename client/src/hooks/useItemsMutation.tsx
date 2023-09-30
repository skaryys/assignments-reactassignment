import { useMutation } from '@tanstack/react-query'


export const useItemMutation = (onSuccess: () => void, url: string, method: string) => {
    const mutation = useMutation({
        mutationFn: (item: { title: string, done: boolean }) => {
            return fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });
        },
        onSuccess: onSuccess, 
})

    return { mutation }
}
