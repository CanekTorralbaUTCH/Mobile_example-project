import React from 'react';
import Layout from './pages/Layout/Layout';
import Main from './pages/main/Main'
import Badge from "./components/Badge"

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Badge header_picture={"https://gaminguardian.com/wp-content/uploads/2019/01/Uzumaki.jpg"}
        profile_picture={"https://64.media.tumblr.com/c456c44e8c3868ca28b92606f2854bd7/7399b9f78eebea69-16/s1280x1920/8b9c25c661a8f230407cbcd9fad86e77467b3f9d.png"}
        name={"Canek Torralba"}
        age={19}
        city={"Chihuahua City"}
        followers={8587}
        likes={9364}
        pictures={"10K"}></Badge>
      </Layout>
    </React.Fragment>
  );
}

export default App;
