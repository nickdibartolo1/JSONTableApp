import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import TableGrid from './components/TableGrid';


function App() {
  return (
    <MantineProvider>
      <section className="section" >
        <h3>
          Tables
        </h3>
      </section>
      <TableGrid></TableGrid>
    </MantineProvider>
  )
}

export default App;
