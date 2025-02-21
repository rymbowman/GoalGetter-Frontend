import { Box, styled, Typography } from "@mui/material";

const Headline = styled(Typography)({
  fontSize: 70,
  marginTop: 50,
  letterSpacing: 5,
  fontFamily: "Kaushan Script",
  cursive,
  color: "#50C878",
  display: "flex",
  alignItems: "flex-end",
});

const LandingPage = () => {
  return (
    <Box>
      <Headline variant="h1">GoalGetter</Headline>
      <Typography variant="body1">
        Helping you reach your goals one task at a time
      </Typography>
    </Box>
  );
};

export default LandingPage;
