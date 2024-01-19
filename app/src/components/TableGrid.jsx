import React from 'react';
import { Grid } from '@mantine/core';
import CommentTable from './tables/comment/CommentTable';
import { Button } from '@mantine/core';

const TableGrid = () => {
    return (
        <>
        {/* <div style={{display: 'flex', justifyContent: "center"}}> */}
        <Grid>
            <Grid.Col span={6}><CommentTable /></Grid.Col>
            <Grid.Col span={6}><CommentTable /></Grid.Col>
            <Grid.Col span={6}><CommentTable /></Grid.Col>
            <Grid.Col span={6}><CommentTable /></Grid.Col>
        </Grid>
        {/* </div> */}
        
        <Button>Button</Button>
        </>
    )
}

export default TableGrid;
