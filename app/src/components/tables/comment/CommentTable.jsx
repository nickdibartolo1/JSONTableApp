import { useState, useEffect } from 'react';
import { Table, Text } from '@mantine/core';

import classes from "./CommentTable.module.css"

const CommentTable = () => {
  const [data, setData] = useState([]);


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

  const rows = data.map((row) => {
    return (
      <Table.Tr key={row.title}>
        <Table.Td>
          {row.name}
        </Table.Td>
        <Table.Td>
          {row.email}
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <div className={classes.layout}>
      <Text>
        <h3>
          Comment Table
        </h3>
      </Text>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Company</Table.Th>
            <Table.Th>Email</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}

export default CommentTable;


