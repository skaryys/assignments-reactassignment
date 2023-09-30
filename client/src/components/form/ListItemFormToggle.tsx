import { FC, useState } from "react";
import { ListItem } from "../list/ListItem";
import { Form } from "./Form";
import { useQueryClient } from "@tanstack/react-query";
import { useEditItemMutation } from "../../hooks/useEditItemMutation"

export type ListItemFormToggleProps = {
    id: number;
    label: string;
    handleRemoval: () => void;
};

export const ListItemFormToggle: FC<ListItemFormToggleProps> = ({ id, label, handleRemoval }) => {
    const queryClient = useQueryClient()
    const [showForm, setShowForm] = useState(false);
    const { mutation } = useEditItemMutation(() => queryClient.invalidateQueries({ queryKey: ["items"]}), id);
  
    const toggleForm = () => {
      setShowForm(!showForm);
    };
  
    return (
      <>
        {!showForm && <ListItem label={label} handleRemoval={handleRemoval} handleEdit={toggleForm} />}
        {showForm && <Form handleCancel={toggleForm} handleSubmit={(value: string) => mutation.mutate({ title: value, done: false })} initialValue={label} />}
      </>
    );
  };