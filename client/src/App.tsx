import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { useState } from "react";

export const App: React.FC = () => {
    const [items, setItems] = useState([]);

    return (
    <ThemeProvider>
        <Container>
            <Layout>
                <Header handleAddItem={() => console.warn("unimplemented")}>To Do app</Header>
                <List />
                {items && items.length > 0 && (
                    <Footer />
                )}
            </Layout>
        </Container>
    </ThemeProvider>
    )
};
