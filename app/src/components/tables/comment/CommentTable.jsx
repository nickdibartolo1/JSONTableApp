import { useState, useEffect } from 'react';
import { Table } from '@mantine/core';
// import classes from './TableScrollArea.module.css';

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
    };
    getResponse();

  }, [])

  return (
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
          </Table.Tr>
        </Table.Thead>
        {/* <Table.Tbody>{data.map((element) => (
          <Table.Tr key={element.name}>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.email}</Table.Td>
          </Table.Tr>
        ))}
        </Table.Tbody> */}
      </Table>
  );
}

export default CommentTable;
