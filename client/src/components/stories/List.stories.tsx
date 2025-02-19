import { Meta, StoryObj } from "@storybook/react";

import { List } from "../list/List";
import { ListItem, ListItemProps } from "../list/ListItem";
import { action } from "@storybook/addon-actions";

const meta = {
    title: "List",
    component: List,
} as Meta<typeof List>;
export default meta;

type Story = StoryObj<typeof ListItem>;

const emptyHandlers: Pick<ListItemProps, "handleEdit" | "handleRemoval"> = {
    handleRemoval: action("Removal requested"),
    handleEdit: action("Edit requested"),
};

export const WithItems: Story = {
    args: {
        children: [
            <ListItem {...emptyHandlers} label={"Lorem ipsum dolor"} />,
            <ListItem {...emptyHandlers} label={"Nullam Adipiscing Ridiculus Fusce"} />,
            <ListItem {...emptyHandlers} label={"Mattis Tristique Parturient "} />,
        ],
    },
};
