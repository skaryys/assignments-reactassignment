import { FC, useState } from "react";
import { Header } from "../Header";
import { Form } from "./Form";

export type HeaderFormToggleProps = {
    children: React.ReactNode;
};

export const HeaderFormToggle: FC<HeaderFormToggleProps> = ({ children }) => {
    const [showForm, setShowForm] = useState(false);
  
    const toggleForm = () => {
      setShowForm(!showForm);
    };
  
    return (
      <>
        {!showForm && <Header handleAddItem={toggleForm}>{children}</Header>}
        {showForm && <Form handleCancel={toggleForm} handleSubmit={() => console.log("todo")} initialValue="testicek" />}
      </>
    );
  };