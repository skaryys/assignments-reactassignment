import { FC, useState } from "react";
import { Header } from "../header/Header";
import { Form } from "./Form";
import { useAddItemMutation } from "../../hooks/useAddItemMutation";
import { useQueryClient } from "@tanstack/react-query";

export type HeaderFormToggleProps = {
    children: React.ReactNode;
};

export const HeaderFormToggle: FC<HeaderFormToggleProps> = ({ children }) => {
    const queryClient = useQueryClient()
    const [showForm, setShowForm] = useState(false);
    const { mutation } = useAddItemMutation(() => queryClient.invalidateQueries({ queryKey: ["items"]}));
  
    const toggleForm = () => {
      setShowForm(!showForm);
    };
  
    return (
      <>
        {!showForm && <Header handleAddItem={toggleForm}>{children}</Header>}
        {showForm && <Form handleCancel={toggleForm} handleSubmit={(value: string) => mutation.mutate({ title: value, done: false })} initialValue="" />}
      </>
    );
  };