import { useEffect, useState } from "react";
import { Table, Text } from '@mantine/core';

import classes from "./AlbumTable.module.css"

const AlbumTable = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        async function getResponse() {
            try {
                const fetchAlbumData = await fetch("http://localhost:3005/get_data2");

                if (!fetchAlbumData.ok) {
                    throw new Error('Failed to fetch');
                }

                const response_data = await fetchAlbumData.json();
                console.log("data", response_data);
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
            </Table.Tr>
        );
    });

    return (
        <div className={classes.layout}>
            <Text>
                <h3>
                    Album Table
                </h3>
            </Text>
            <Table verticalSpacing="sm">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Chart</Table.Th>
                        <Table.Th>Album</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </div>
    )
}

export default AlbumTable
