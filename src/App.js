import React, { useState, useEffect } from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

function App() {
  const [resource, setResource] = useState("posts");
  const [data, setData] = useState([])

  const getData = async (data)=>{
    const response = await Axios.get(`https://jsonplaceholder.typicode.com/${data}`)
    setData(response.data);
  }

  useEffect(() => {
     getData(resource)
  },[resource])

  return (
    <Container maxWidth="lg">
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => setResource("posts")}
      >
        Post
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => setResource("users")}
      >
        User
      </Button>
      <div>{data.length}</div>
    </Container>
  );
}

export default App;
