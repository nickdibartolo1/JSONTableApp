import { useState, useEffect } from 'react';
import { Table, ScrollArea } from '@mantine/core';
import cx from 'clsx';
import classes from "./TableScrollArea.module.css"

const CommentTable = () => {
  const [data, setData] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    async function getResponse() {
      try {
        const fetchCommentData = await fetch("http://localhost:3005/get_data");

        if (!fetchCommentData.ok) {
          throw new Error('Failed to fetch');
        }

        const response_data = await fetchCommentData.json();
        console.log("DATA", response_data);
        setData(response_data);
      } catch (error) {
        console.log("Response is not JSON", error);
      }
    }
    getResponse();

  }, [])
  const rows = data.map((row) => (<Table.Tr key={row.name}>
    <Table.Td>{row.name}</Table.Td>
    <Table.Td>{row.email}</Table.Td>
    <Table.Td>{row.company}</Table.Td>
  </Table.Tr>));
  return (
    <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={700}>
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Company</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>);
}

export default CommentTable;


