import { Grid } from '@mantine/core';
import CommentTable from './tables/comment/CommentTable';


const TableGrid = () => {
    return (
        <Grid>
            <Grid.Col span={4}><CommentTable/></Grid.Col>
            <Grid.Col span={4}>2</Grid.Col>
            <Grid.Col span={4}>3</Grid.Col>
        </Grid>
    )
}

export default TableGrid;
