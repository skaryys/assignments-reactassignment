import { FC, PropsWithChildren } from "react";
import { List } from "./list/List";
import { Layout } from "./Layout";
import { HeaderFormToggle } from "./form/HeaderFormToggle";
import { Footer } from "./Footer";

export const AppContainer: FC<PropsWithChildren> = () => {
    return (
        <Layout>
            <HeaderFormToggle>To-Do app</HeaderFormToggle>
            <List />
            <Footer />
        </Layout>
    )
};
