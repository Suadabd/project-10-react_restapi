import React from "react";
import withContext from "./Context";
import { Route, Routes } from "react-router-dom";


// imported Components
import CourseDetail from "./component/CourseDetail"; 
import Courses from "./component/Courses"; 
import Header from "./component/Header";
import UpdateCourse from "./component/UpdateCourse";
import UserSignIn from "./component/UserSignIn"; 
import UserSignOut from "./component/UserSignOut";
import UserSignUp from "./component/UserSignUp";
import CreateCourse from "./component/CreateCourse";
import PrivateRoute from "./PrivateRoute";

// connecting components to Context
const CourseDetailWithContext = withContext(CourseDetail);
const CoursesWithContext = withContext(Courses);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const HeaderWithContext = withContext(Header);
const UserSignOutWithContext = withContext(UserSignOut);
const UpdateCourseWithContext = withContext(UpdateCourse);
const CreateCourseWithContext = withContext(CreateCourse);
const PrivateRouteWithContext = withContext(PrivateRoute);

const App = () => {
  return (

    <React.Fragment>
      <HeaderWithContext />

      <Routes>
        <Route path="courses/create"
          element={
            <PrivateRouteWithContext>
              <CreateCourseWithContext />
            </PrivateRouteWithContext>} />

        <Route path="courses/:id/update"
          element={
            <PrivateRouteWithContext>
              <UpdateCourseWithContext />
            </PrivateRouteWithContext>} />

        <Route path="/" element={<CoursesWithContext />} />
        <Route path="/signin" element={<UserSignInWithContext />} />
        <Route path="/signup" element={<UserSignUpWithContext />} />
        <Route path="/signout" element={<UserSignOutWithContext />} />
        <Route path="courses/:id" element={<CourseDetailWithContext />} />
      </Routes>

    </React.Fragment>
  );
};

export default App;


// checking connection

// function App() {
//   // move lt8t to courses
  
//     let courses = [];
//     const url = 'http://localhost:5000/api/courses';
  
//     fetch(url)
//       .then((response) => response.json()) ///reads res and returns promise that resolves the json 
//       .then((response) => {
//         courses = response;
//         console.log(response);
//     });
  
  
//     return (
//       <div className="App"> 
//       <ul>
//         {courses.map( course => <li> { course.title } </li> ) }
  
//       </ul>
        
        
  
//       </div>
//     );
//   }
  
//   export default App;
  

