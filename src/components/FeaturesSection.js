import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import CheckIcon from "@material-ui/icons/Check";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    padding: `0 ${theme.spacing(4)}px`,
  },
}));

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Charge up",
      subtitle:
        "Set class goals or personal goals to give students something to work toward!",
      icon: OfflineBoltIcon,
      iconColor: "secondary.main",
    },
    {
      title: "Motivation",
      subtitle:
        "Having a public class leaderboard allows students to see others progress and rewards and motivate them to work to the top of the leaderboard.",
      icon: CheckIcon,
      iconColor: "primary.main",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className={classes.container}>
        <Grid container={true} justifyContent="center" spacing={7}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} md={4} key={index}>
              <Box textAlign="center">
                <Box color={item.iconColor} fontSize="4.5rem">
                  <item.icon fontSize="inherit" />
                </Box>
                <Typography variant="h5" gutterBottom={true}>
                  {item.title}
                </Typography>
                <Box mt={3}>
                  <Typography variant="subtitle1">{item.subtitle}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
