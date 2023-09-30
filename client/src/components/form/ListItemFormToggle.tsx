import { FC, useState } from "react";
import { ListItem } from "../ListItem";
import { Form } from "./Form";

export type ListItemFormToggleProps = {
    label: string;
    handleRemoval: () => void;
};

export const HeaderFormToggle: FC<ListItemFormToggleProps> = ({ label, handleRemoval }) => {
    const [showForm, setShowForm] = useState(false);
  
    const toggleForm = () => {
      setShowForm(!showForm);
    };
  
    return (
      <>
        {!showForm && <ListItem label={label} handleRemoval={handleRemoval} handleEdit={toggleForm} />}
        {showForm && <Form handleCancel={toggleForm} handleSubmit={() => console.log("todo")} initialValue="testicek" />}
      </>
    );
  };