import { AppContainer } from "./components/AppContainer";
import { Container } from "./components/Container";
import { ThemeProvider } from "./components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App: React.FC = () => {
    return (
    <ThemeProvider>
        <QueryClientProvider client={queryClient}>
        <Container>
            <AppContainer />
        </Container>
        </QueryClientProvider>
    </ThemeProvider>
    )
};
