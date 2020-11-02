import React, {useState} from 'react'

function App() {
  const [resource, setResource] = useState("posts");


  return (
     <div className="container">
        <button type="submit" className="btn btn-primary" onClick={()=>setResource("posts")}>Post</button>
        <button type="submit" className="btn btn-primary" onClick={()=>setResource("users")}>User</button>
        <div>
        {resource}
        </div>
     </div>  
  );
}

export default App;
