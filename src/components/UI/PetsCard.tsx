import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, Link } from "@mui/material";
import { TPet } from "@/types";

const PetsCard = ({ pets }: any) => {
  return (
    <>
      <Grid container spacing={2}>
        {pets
          ?.filter((item: TPet) => item.status === "APPROVED")
          .map((item: TPet) => (
            <Grid item xs={12} sm={6} md={4} key={item.name}>
              <Card
                sx={{
                  position: "relative",
                }}
              >
                <CardMedia
                  sx={{
                    height: 250,
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                  image={item.petPhoto[0]}
                  title={item.name}
                />
                <Box
                  sx={{
                    top: 10,
                    right: 10,
                    width: "50px",
                    height: "50px",
                    color: "white",
                    padding: "10px",
                    borderRadius: "50%",
                    textAlign: "center",
                    fontSize: "12px",
                    position: "absolute",
                    backgroundColor: "primary.main",
                  }}
                >
                  <Typography color="white" fontSize={13} mt={1}>
                    {item.age} mo
                  </Typography>
                </Box>
                <CardContent sx={{ padding: "20px" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={700}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    lineHeight={2}
                    variant="body2"
                    color="textSecondary"
                  >
                    {item.description}
                  </Typography>
                  <Typography
                    lineHeight={2}
                    variant="body2"
                    color="textSecondary"
                  >
                    Breed: {item.breed}
                  </Typography>
                  <Typography
                    lineHeight={2}
                    variant="body2"
                    color="textSecondary"
                  >
                    Location: {item.location}
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: "0 20px", marginBottom: "20px" }}>
                  <Link href={`/pets/${item.id}`} underline="none">
                    <Button size="small">View Details</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default PetsCard;
