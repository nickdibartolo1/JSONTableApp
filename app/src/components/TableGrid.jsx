import CommentTable from './tables/comment/CommentTable';
import AlbumTable from './tables/album/AlbumTable';
import TodosTable from './tables/todos/TodosTable';
import { Grid, Container } from '@mantine/core';

import classes from './TableGrid.module.css'
import PostsTable from './tables/posts/PostsTable';


const TableGrid = () => {
    return (
        <Container className={classes.container}>
            <Grid>
                <Grid.Col className={classes.tableCol}>
                    <CommentTable />
                </Grid.Col>
                <Grid.Col className={classes.tableCol} >
                    <TodosTable />
                </Grid.Col>
                <Grid.Col className={classes.tableCol}>
                    <AlbumTable />
                </Grid.Col>
                <Grid.Col className={classes.tableCol}>
                    <PostsTable />
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default TableGrid;
