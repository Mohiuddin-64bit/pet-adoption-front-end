import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";

const card = [{}, {}, {}, {}, {}, {}];

const PetsCard = () => {
  return (
    <>
      <Grid container spacing={2}>
        {card.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                sx={{ height: 250 }}
                image="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/twenty20_11401931-f092-4214-861c-c8ea63b45e67-800x600.jpg"
                title="Lizard"
              />
              <CardContent sx={{ padding: "20px" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontWeight={700}
                >
                  Lizard
                </Typography>
                <Typography
                  lineHeight={2}
                  variant="body2"
                  color="textSecondary"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions sx={{ padding: "0 20px", marginBottom: "20px" }}>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PetsCard;
