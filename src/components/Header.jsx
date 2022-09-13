import React from "react";
const Header = () => {
  return (
    <>
      <div id="new">
        <h1>𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠</h1>
        <div className="second">
          <div className="third">
            <img
              className="picss"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
              alt="new"
            />
            <p className="atif">ATIF MEMON</p>
            <h3 className="same">Home</h3>
            <h3 className="same">FindFriends</h3>
          </div>
        </div>
        <div className="fonts">
          <i id="pppp" class="fas fa-user-friends"></i>
          <i id="icons" class="fas fa-hot-tub"></i>
          <i id="icons" class="fas fa-bell"></i>
          <i id="pppp" class="fas fa-question-circle"></i>
          <i id="icons" class="fas fa-caret-down"></i>
        </div>
      </div>
    </>
  );
};
export default Header;
