import { Box, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
  onReverse: (url: string) => void;
}

export default function SearchBar({ onSearch, onReverse }: Props) {
  const [query, setQuery] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
      <TextField
        label="Search text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={() => onSearch(query)}>
        Search
      </Button>

      <TextField
        label="Reverse image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        fullWidth
      />
      <Button variant="outlined" onClick={() => onReverse(imageUrl)}>
        Reverse
      </Button>
    </Stack>
  );
}
