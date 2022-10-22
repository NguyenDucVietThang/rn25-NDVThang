import React, { useState } from "react";
import * as Icons from "react-icons/ai";

interface star {

}
function Fun_Like(props: star) {
  const [like, setLike] = useState(true); //có 2 gt là true và fasle nên k dung boolean  ban đầu chưa like
  //false là gid trị tương ứng của like
  const handleClick = () => {
    // console.log("Clicked");
    // setLike(like === false);
    setLike(!like);
  };
  return (
    <div onClick={handleClick}>{like ? <Icons.AiFillLike /> : <Icons.AiOutlineDislike />}
    </div>
  );
}

export default Fun_Like;