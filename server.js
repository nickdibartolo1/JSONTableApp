import express  from 'express';
import cors from 'cors'
import fetch from 'node-fetch';

const app = express();
app.use(cors());

const port = 3005;

app.get("/get_data", async (req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = await response.json();
        console.log("data", data)
        res.json(data);

    } catch (error) {
        console.log(error)
    }

})


app.listen(port, () => {
    console.log(`Port is listening on port ${port}`)
})