import { useEffect, useState } from "react";
import { Table, Text } from '@mantine/core';

import classes from "./PostsTable.module.css";

const PostsTable = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getResponse() {
            try {
                const fetchPostsData = await fetch("http://localhost:3005/get_data4");

                if (!fetchPostsData.ok) {
                    throw new Error('Failed to fetch');
                }

                const response_data = await fetchPostsData.json();
                console.log("Posts", response_data);
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
                <Table.Td className={classes.text}>
                    {row.id}
                </Table.Td>
                <Table.Td className={classes.text}>
                    {row.title}
                </Table.Td>
                <Table.Td className={classes.text}>
                    {row.body}
                </Table.Td>
            </Table.Tr>
        );
    });


    return (
        <div className={classes.layout}>
            <Text>
                <h3>
                    Posts Table
                </h3>
            </Text>
            <Table verticalSpacing="sm">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>ID</Table.Th>
                        <Table.Th>Title</Table.Th>
                        <Table.Th>Description</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </div>
    )
}

export default PostsTable;
