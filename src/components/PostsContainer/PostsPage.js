//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";

// import data
const PostsPage = props => {
  console.log("the props", props)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {props.data.map(post => (
        <Post 
          // key= {data.username}
          post = {post}
        />
      ))}
    </div>
  );
};

export default PostsPage;



// ...console.log


// const PostsPage = (props) => {
//   // set up state for your data
//   console.log("Props from ProfileCard", props);

//     const [points, setPoints] = useState(props.propsPassedFromParent.pride);

//     const incrementPoint = ()  => {
//       setPoints(points + 1);

//         console.log(data);
//     };



//   return (
//     <div className="posts-container-wrapper">


//       {data.map(p =>  (
//         <ProfileCard key={p.id} propsPassedFromParent ={p} />
//       ))}
//       {/* map through data here to return a Post and pass data as props to Post */}
//     </div>
//   );
// };

// export default PostsPage;
