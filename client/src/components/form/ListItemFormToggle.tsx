import { FC, useState } from "react";
import { ListItem } from "../list/ListItem";
import { Form } from "./Form";
import { useQueryClient } from "@tanstack/react-query";
import { useItemMutation } from "../../hooks/useItemsMutation"

export type ListItemFormToggleProps = {
    id: number;
    label: string;
    done: boolean;
};

export const ListItemFormToggle: FC<ListItemFormToggleProps> = ({ id, label, done }) => {
    const queryClient = useQueryClient()
    const [showForm, setShowForm] = useState(false);
    const { mutation: editMutation } = useItemMutation(() => queryClient.invalidateQueries({ queryKey: ["items"]}), "http://localhost:3000/items/" + id, "PUT");
    const { mutation: deleteMutation } = useItemMutation(() => queryClient.invalidateQueries({ queryKey: ["items"]}), "http://localhost:3000/items/" + id, "DELETE");
    const { mutation: checkMutation } = useItemMutation(() => queryClient.invalidateQueries({ queryKey: ["items"]}), "http://localhost:3000/items/done/" + id, "PUT");

    const toggleForm = () => {
      setShowForm(!showForm);
    };
  
    return (
      <>
        {!showForm && 
          <ListItem
            label={label}
            handleRemoval={() => deleteMutation.mutate({ title: label, done: done})}
            handleEdit={toggleForm} 
            onCheckedChange={(checked) => {
              if (checked) {
                checkMutation.mutate({ title: label, done: true })
              }
            }}
            checked={done}
          />
        }
        {showForm && 
          <Form
            handleCancel={toggleForm}
            handleSubmit={(value: string) => {
              editMutation.mutate({ title: value, done: done })
              toggleForm()
            }} 
            initialValue={label} 
          />
        }
      </>
    );
  };