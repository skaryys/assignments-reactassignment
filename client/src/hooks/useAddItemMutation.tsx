import { useMutation } from '@tanstack/react-query'


export const useAddItemMutation = (onSuccess: () => void) => {
    const mutation = useMutation({
        mutationFn: (item: { title: string, done: boolean }) => {
            return fetch('http://localhost:3000/items', {
                method: "POST",
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
