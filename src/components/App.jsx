import React from "react";
function Contact(props) {
  return (
    <div className="card">
      <div className="top">
        <h2>{props.name}</h2>
        <img src={props.imgURL} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Contact
        name="Beyonce"
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
      />

      <Contact
        name="Beyonce"
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
      />

      <Contact
        imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        name="Jack Bauer"
        email="jack@nowhere.com"
      />
    </div>
  );
}

export default App;
