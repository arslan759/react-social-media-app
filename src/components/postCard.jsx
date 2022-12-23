import {
  Favorite,
  FavoriteBorder,
  ModeCommentOutlined,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddComment from "./addcomment";

const PostCard = ({
  name,
  photo,
  caption,
  likes,
  comments,
  shares,
  date,
  avatar,
}) => {
  const [like, setLike] = useState(likes);
  const [comment, setComments] = useState(comments);
  const [share, setShares] = useState(shares);
  const [isLiked, setIsLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const likesHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <Card
      sx={{
        maxWidth: "100%",
        mx: "auto",
        marginBottom: 5,
        borderRadius: "15px",
      }}
    >
      <CardHeader
        avatar={<Avatar src={avatar}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {caption}
        </Typography>
      </CardContent>
      {photo ? (
        <CardMedia
          component="img"
          height="20%"
          image={photo}
          alt="Paella dish"
        />
      ) : null}

      <CardActions disableSpacing>
        <IconButton onClick={likesHandler} aria-label="add to favorites">
          <Checkbox
            sx={{ padding: "0px" }}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        {like}
        <IconButton
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="share"
        >
          <ModeCommentOutlined />
        </IconButton>
        {comment.length}
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        {share}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <AddComment />
        {comment.map((item) => (
          <Card
            elevation={0}
            sx={{
              maxWidth: "100%",
              mx: "auto",
              marginY: 2,
            }}
          >
            <CardHeader
              avatar={<Avatar src={item.avatar} />}
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={item.username}
              subheader={item.comment}
            />
          </Card>
        ))}
      </Collapse>
    </Card>
  );
};

export default PostCard;
