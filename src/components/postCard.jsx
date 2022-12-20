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
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const PostCard = ({ name, photo, caption, likes, comments, shares, date }) => {
  const [isLiked, setIsLiked] = useState(false);

  const likesHandler = () => {};
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
        avatar={<Avatar></Avatar>}
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
      <CardMedia component="img" height="20%" image={photo} alt="Paella dish" />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={likesHandler}>
          <Checkbox
            sx={{ padding: "0px" }}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        {likes}
        <IconButton aria-label="share">
          <ModeCommentOutlined />
        </IconButton>
        {comments}
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        {shares}
      </CardActions>
    </Card>
  );
};

export default PostCard;
