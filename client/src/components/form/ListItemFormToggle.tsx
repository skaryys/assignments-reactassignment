import { FC, useState } from "react";
import { ListItem } from "../list/ListItem";
import { Form } from "./Form";
import { useItemMutation } from "../../hooks/useItemsMutation";
import { useInvalidateItemsQuery } from "../../hooks/useInvalidateItemsQuery";

export type ListItemFormToggleProps = {
    id: number;
    label: string;
    done: boolean;
};

export const ListItemFormToggle: FC<ListItemFormToggleProps> = ({ id, label, done }) => {
    const { invalidate } = useInvalidateItemsQuery();
    const [showForm, setShowForm] = useState(false);
    const { mutation: editMutation } = useItemMutation(() => invalidate, "http://localhost:3000/items/" + id, "PUT");
    const { mutation: deleteMutation } = useItemMutation(() => invalidate, "http://localhost:3000/items/" + id, "DELETE");
    const { mutation: checkMutation } = useItemMutation(() => invalidate, "http://localhost:3000/items/done/" + id, "PUT");

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