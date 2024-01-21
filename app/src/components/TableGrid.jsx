import { Grid } from '@mantine/core';
import CommentTable from './tables/comment/CommentTable';
import AlbumTable from './tables/album/AlbumTable';


const TableGrid = () => {
    return (
        <main>
            <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
                <Grid.Col style={{ backgroundColor: "gray" }} span={4}><CommentTable /></Grid.Col>
                <Grid.Col style={{ backgroundColor: "yellow" }} span={4}><AlbumTable/></Grid.Col>
                <Grid.Col span={4}>3</Grid.Col>
            </Grid>
        </main>
    )
}

export default TableGrid;
