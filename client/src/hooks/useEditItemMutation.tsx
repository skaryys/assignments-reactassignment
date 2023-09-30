import { useMutation } from '@tanstack/react-query'


export const useEditItemMutation = (onSuccess: () => void, id: number) => {
    const mutation = useMutation({
        mutationFn: (item: { title: string, done: boolean }) => {
            return fetch('http://localhost:3000/items/' + id, {
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
