import { FC, useState } from "react";
import { ListItem } from "../list/ListItem";
import { Form } from "./Form";
import { useQueryClient } from "@tanstack/react-query";
import { useItemMutation } from "../../hooks/useItemsMutation"

export type ListItemFormToggleProps = {
    id: number;
    label: string;
};

export const ListItemFormToggle: FC<ListItemFormToggleProps> = ({ id, label, handleRemoval }) => {
    const queryClient = useQueryClient()
    const [showForm, setShowForm] = useState(false);
    const { mutation: editMutation } = useItemMutation(() => queryClient.invalidateQueries({ queryKey: ["items"]}), "http://localhost:3000/items/" + id, "PUT");
    const { mutation: deleteMutation } = useItemMutation(() => queryClient.invalidateQueries({ queryKey: ["items"]}), "http://localhost:3000/items/" + id, "DELETE");

    const toggleForm = () => {
      setShowForm(!showForm);
    };
  
    return (
      <>
        {!showForm && <ListItem label={label} handleRemoval={() => deleteMutation.mutate({ title: label, done: false})} handleEdit={toggleForm} />}
        {showForm && 
          <Form
            handleCancel={toggleForm}
            handleSubmit={(value: string) => {
              editMutation.mutate({ title: value, done: false })
              toggleForm()
            }} 
            initialValue={label} 
          />
        }
      </>
    );
  };