import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { PlusIcon } from "@radix-ui/react-icons";

const meta = {
    title: "Button",
    component: Button,
    argTypes: {
        onClick: { action: "clicked" },
        type: {
            control: {
                type: "select",
                options: ["button", "submit", "reset"],
            },
        },
    },
} as Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof Button>;
export const Default: Story = {
    args: {
        children: <PlusIcon />,
    },
};
export const Green: Story = {
    args: {
        children: <PlusIcon />,
        variant: "green",
    },
};