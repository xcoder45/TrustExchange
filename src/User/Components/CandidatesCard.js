import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useSelector } from "react-redux";

export default function CandidateCard(props) {
  const eVote = useSelector((state) => state.eVote.eVote);

  const account = useSelector((state) => state.account.account);
  const vote = async () => {
    try {
      await eVote.methods
        .addVote(props.id, props.email)
        .send({ from: account });

      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Card style={cardDiv} sx={{ maxWidth: 260, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={props.symbol}
          alt="green iguana"
        />
        <CardContent style={cardContent}>
          <Typography
            style={{ color: "white", margin: 0 }}
            gutterBottom
            component="div"
          >
            {props.partyName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={cardAction}>
        <Button
          onClick={
            !props.isVoted && props.aadhar !== "" ? vote : props.handleClick
          }
          size="small"
          style={voteButton}
        >
          {!props.isVoted ? "Vote" : "Voted"}
        </Button>
      </CardActions>
    </Card>
  );
}
// styles

const cardDiv = {
  backgroundColor: "#17202A",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};
const cardContent = {
  backgroundColor: "#17202A",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};
const cardAction = {
  backgroundColor: "#184E8A",
  width: "100%",
  display: "flex",
  justifyContent: "center",
};
const voteButton = { color: "white", width: "100%" };
