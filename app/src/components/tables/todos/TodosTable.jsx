import { useEffect, useState } from "react";
import { Table } from '@mantine/core';

import classes from "./TodosTable.module.css";


const TodosTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getResponse() {
            try {
                const fetchTodoData = await fetch('http://localhost:3005/get_data3');

                if (!fetchTodoData.ok) {
                    throw new Error('Failed to fetch');
                }

                const response_data = await fetchTodoData.json();
                console.log("DaTa", response_data);
                setData(response_data)
            } catch (error) {
                console.log(error)
            }
        }
        getResponse()
    }, [])

    const rows = data.map((row, index) => {
        return (
            <Table.Tr key={index}>
                <Table.Td>
                    {row.id}
                </Table.Td>
                <Table.Td>
                    {row.title}
                </Table.Td>
                <Table.Td>
                    {row.completed}
                </Table.Td>
            </Table.Tr>
        );
    });

    return (
        <div className={classes.layout}>
            <Table verticalSpacing="sm">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Number</Table.Th>
                        <Table.Th>Task</Table.Th>
                        <Table.Th>Finished</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </div>
    )
}

export default TodosTable
