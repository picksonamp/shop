import { Box, CircularProgress } from "@mui/material"

export default function Loading() {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh" // Задает высоту контейнера
      >
        <CircularProgress />
      </Box>
    )
  }