// import React, { Component } from "react";
// import MovieRow from "./MovieRow";
// import UserContext from "./userContext";
// class MovieList extends Component {
//   static contextType = UserContext;
//   componentDidMount() {
//     console.log("context", this.context);
//     //this property returns a current user object
//     //in real applications we can make decisions in this component based on the current user
//   }
//   render() {
//     return (
//       <UserContext.Consumer>
//         {(userContext) => (
//           <div>
//             MovieList {userContext.name} <MovieRow />
//           </div>
//         )}
//       </UserContext.Consumer>
//     );
//   }
// }
// //there is another way is a part of creating the class
// // MovieList.contextType=UserContext;

// //this is a static property contestType property belongs to class not object
// export default MovieList;

//practice
import React from "react";
import MovieRow from "./MovieRow";
import UserContext from "./userContext";

export default class MovieList extends React.Component {
  static contextType = UserContext;
  componentDidMount() {
    console.log("context", this.context);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List
            {userContext.currentUser ? userContext.currentUser.name : ""}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
