import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { useState } from "react";
import { HeaderFormToggle } from "./components/form/HeaderFormToggle";

export const App: React.FC = () => {
    const [items, setItems] = useState([]);

    return (
    <ThemeProvider>
        <Container>
            <Layout>
                <HeaderFormToggle>To-Do app</HeaderFormToggle>
                <List />
                {items && items.length > 0 && (
                    <Footer />
                )}
            </Layout>
        </Container>
    </ThemeProvider>
    )
};
