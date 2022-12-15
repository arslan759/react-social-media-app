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
import React from "react";

const PostCard = () => {
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
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            sx={{ padding: "0px" }}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        {21}
        <IconButton aria-label="share">
          <ModeCommentOutlined />
        </IconButton>
        {32}
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        {11}
      </CardActions>
    </Card>
  );
};

export default PostCard;
