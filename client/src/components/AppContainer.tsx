import { FC, PropsWithChildren } from "react";
import { List } from "./list/List";
import { Layout } from "./Layout";
import { HeaderFormToggle } from "./form/HeaderFormToggle";
import { Footer } from "./Footer";
import { useItemsQuery } from "../hooks/useItemsQuery";
import { Spinner } from "./Spinner";
import { ItemType } from "../types";
import { ListItemFormToggle } from "./form/ListItemFormToggle";

export const AppContainer: FC<PropsWithChildren> = () => {
    const { isLoading, data } = useItemsQuery();

    return (
        <Layout>
            <HeaderFormToggle>To-Do app</HeaderFormToggle>
            <List>
                {isLoading ? (
                <Spinner />
                ) : (
                    <>
                        {data.map((item: ItemType) => {
                            return <ListItemFormToggle key={item.id} label={item.title} handleRemoval={() => console.log("todo")} />
                        })}
                    </>
                )}
            </List>
            <Footer />
        </Layout>
    )
};
