import "./Post.css";
import {
  CommentIcon,
  DotsIcon,
  HeartIcon,
  MessangerIcon,
  SaveIcon,
} from "../../icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Post = ({ postData }) => {
  return (
    <section className="Post">
      <div className="Post__topSide">
        <img
          src={postData.profile_img}
          alt="portrait persone"
          className="Post__userImg"
        />
        <div className="Post__TopSide__text">
          <p className="Post__nick">{postData.username}</p>
          <p className="Post__location">{postData.location}</p>
        </div>
        <div className="Post__dots">
          <DotsIcon />
        </div>
      </div>
      <Swiper>
        {postData.gallery.map((img) => (
          <SwiperSlide>
            <img className="Post__img" src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="Post__actions">
        <div className="Post__heartCommMess">
          <div className="Post__heartIcon">
            <HeartIcon />
          </div>
          <div className="Post__commentIcon">
            <CommentIcon />
          </div>
          <div className="Post__messangerIcon">
            <MessangerIcon />
          </div>
        </div>
        <div className="Post__actions__save">
          <SaveIcon />
        </div>
      </div>
      <div className="Post__captionContainer">
        <div className="Post__likes">
          <img src={postData.friend_img} alt="" />
          <p>
            Liked by
            <span className="Post__friend">{` ${postData.friend}`}</span>
          </p>
          <p>
            and{" "}
            <span className="Post__likesNum">{`${postData.likes} others`}</span>
          </p>
        </div>
        <div className="Post__caption__text">
          <p className="Post__caption__username">
            {`${postData.username} `}
            <span className="Post__caption">{postData.caption}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Post;

// caption
// :
// "Conquering new heights. #mountainclimbing"
// comments
// :
// 31
// id
// :
// 15
// image_url
// :
// "https://loremflickr.com/500/300?random=15"
// likes
// :
// 394

// :
// "Mount Everest, Nepal"
// profile_img
// :
// "https://randomuser.me/api/portraits/thumb/men/15.jpg"
// username
// :
// "mountain_adventurer
