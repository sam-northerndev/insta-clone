import React, { useState } from 'react';
import Avatar from './Avatar';
// Icons
import { ReactComponent as Share } from '../images/iconography/Share.svg';
import { ReactComponent as Heart } from '../images/iconography/Heart.svg';
import { ReactComponent as Comment } from '../images/iconography/Comment.svg';
import { ReactComponent as Bookmark } from '../images/iconography/Bookmark.svg';

import styles from './post.module.css';

const Post = ({ post: { author, location, description, image, likes, comments } }) => {
  const [liked, setLiked] = useState(false);
  const [stateLikes, setStateLikes] = useState(likes);

  const handleLikeChange = () => {
    setStateLikes(liked ? stateLikes - 1 : stateLikes + 1);
    setLiked(!liked);
  };

  return (
    <div className={styles.postContainer}>
      <PostHeader author={author} location={location} />
      <img className={styles.postImage} src={image} alt={`${author.username}'s post`} onClick={handleLikeChange} />
      <PostControls
        author={author}
        description={description}
        likes={stateLikes}
        liked={liked}
        onLikeChange={handleLikeChange}
      />
      <PostComments comments={comments} />
    </div>
  );
};

const PostHeader = ({ author, location }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.infoContainer}>
        <Avatar style={{ marginRight: '8px' }} imageURL={author.image} username={author.username} story={false} />
        <div className={styles.info}>
          <p className={styles.bold}>{author.username}</p>
          <p>{location}</p>
        </div>
      </div>
      <Share className={styles.share} />
    </div>
  );
};

const PostControls = ({ likes, liked, onLikeChange, description, author }) => {
  return (
    <div className={styles.controlContainer}>
      <div className={styles.iconContainer}>
        <div className={styles.groupOne}>
          <Heart onClick={onLikeChange} className={liked ? styles.liked : ''} />
          <Comment />
        </div>
        <div className={styles.groupTwo}>
          <Bookmark />
        </div>
      </div>
      <div className={styles.info}>
        <p style={{ padding: '7px 0px' }} className={styles.bold}>{`${likes} likes`}</p>
      </div>
      <PostComment author={author} comment={description} />
    </div>
  );
};

const PostComments = ({ comments }) => {
  const commentLength = comments.length;
  const [isExpanded, setExpanded] = useState(false);

  const handleViewComments = () => setExpanded(!isExpanded);

  return (
    <div className={styles.commentContainer}>
      {commentLength > 0 && !isExpanded && (
        <p onClick={handleViewComments} className={styles.viewComments}>{`View ${commentLength} ${
          commentLength === 1 ? 'comment' : 'comments'
        }`}</p>
      )}
      {isExpanded && (
        <>
          <div className={styles.commentsContainer}>
            {comments.map((comment, key) => (
              <PostComment key={key} author={comment.author} comment={comment.text} />
            ))}
          </div>
          <p onClick={handleViewComments} className={styles.viewComments}>{`Collapse ${commentLength} ${
            commentLength === 1 ? 'comment' : 'comments'
          }`}</p>
        </>
      )}
    </div>
  );
};

const PostComment = ({ author, comment }) => (
  <div className={styles.info}>
    <p className={styles.comment}>
      <span className={styles.bold}>{author.username}</span> {comment}
    </p>
  </div>
);

export default Post;
