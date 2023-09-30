import { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "../list/ListItem";

const meta = {
    title: "List Item",
    component: ListItem,
    argTypes: {
        handleRemoval: { action: "removed" },
        handleEdit: { action: "edited" },
    },
} as Meta<typeof ListItem>;
export default meta;
type Story = StoryObj<typeof ListItem>;
export const ToDo: Story = {
    args: {
        label: "Lorem ipsum dolor",
    },
};
export const Done: Story = {
    args: {
        ...ToDo.args,
        checked: true,
    },
};
export const OnHover: Story = {
    args: {
        ...ToDo.args,
        checked: false,
    },
    render: () => <ListItem label="Dolor sit amet" handleEdit={() => console.log("edit")} handleRemoval={() => console.log("removal")} className={"listitem _hover"} />
}
