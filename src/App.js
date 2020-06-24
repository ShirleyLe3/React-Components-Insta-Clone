/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";

// import the PostsPage and SearchBar and add them to the App
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";
import dummyData from "./dummy-data";


// import React from "react";
// import "./App.css";
// import "../CommentSection/CommentSectionContainer";
// import "../PostsContainer/Post";

// import "../PostsContainer/PostsPage";
// import "../components/SearchBar/SearchBarContainer";
// import "../dummydata";
// import the PostsPage and SearchBar and add them to the App


const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const [data] = useState(dummyData);
  console.log("this is the dummyData:", data);
  return (
    <div className="App">
      {/* Add components here  and pass props where appropriate */}
      <SearchBar/>
      <PostsPage
        data = {data}
      />
    </div>
  );
};

export default App;




// const App = () => {

//   return (
//     <div className="App">
//       {/* Add imported components here to render them */}
//       <h1> potatoes</h1>
//       <PostsPage/>
//       <SearchBarContainer/>
//     </div>

//   );
// };

// export default App;





