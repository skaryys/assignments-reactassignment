import { FC, useState } from "react";
import { Header } from "../header/Header";
import { Form } from "./Form";
import { useItemMutation } from "../../hooks/useItemsMutation";
import { useInvalidateItemsQuery } from "../../hooks/useInvalidateItemsQuery";

export type HeaderFormToggleProps = {
    children: React.ReactNode;
};

export const HeaderFormToggle: FC<HeaderFormToggleProps> = ({ children }) => {
    const [showForm, setShowForm] = useState(false);
    const { invalidate } = useInvalidateItemsQuery();
    const { mutation } = useItemMutation(() => invalidate, 'http://localhost:3000/items', "POST");
  
    const toggleForm = () => {
      setShowForm(!showForm);
    };
  
    return (
      <>
        {!showForm && <Header handleAddItem={toggleForm}>{children}</Header>}
        {showForm &&
          <Form
            handleCancel={toggleForm}
            handleSubmit={(value: string) => {
              mutation.mutate({ title: value, done: false });
              setShowForm(false);
            }}
            initialValue=""
          />
        }
      </>
    );
  };