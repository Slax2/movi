import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Stack,
} from "@mui/material";
const Search = () => {
  return (
    <Box>
      <Container>
        <Grid container mt={6}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h2">OMDB Search</Typography>
                <Stack
                  mt="2"
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <TextField label="Movie or tv show" fullWidth />
                  <Button variant="contained" fullWidth>
                    Search
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Search;
