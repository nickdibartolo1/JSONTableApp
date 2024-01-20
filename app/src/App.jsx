import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import TableGrid from './components/TableGrid';

function App() {
  return (
    <MantineProvider>
      <TableGrid></TableGrid>
    </MantineProvider>
  )
}

export default App;
