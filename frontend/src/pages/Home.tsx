import { Container, Grid, Typography, Alert, Link } from "@mui/material";
import { useState } from "react";
import api from "../api/axios";
import type { SearchResult } from "../types/SearchResult";
import SearchBar from "../components/SearchBar";
import ResultCard from "../components/ResultCard";

export default function Home() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [reverseLink, setReverseLink] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async (query: string) => {
    setError("");
    setReverseLink("");
    try {
      const { data } = await api.get<SearchResult[]>(`/search`, {
        params: { query },
      });
      setResults(data);
    } catch (e) {
      setError("Search failed. Check backend console.");
    }
  };

  const handleReverse = async (url: string) => {
    setError("");
    setResults([]);
    try {
      const { data } = await api.get<{ reverse_url: string }>(`/reverse`, {
        params: { url },
      });
      setReverseLink(data.reverse_url);
    } catch (e) {
      setError("Reverse search failed.");
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Image & Reverse Search
      </Typography>

      <SearchBar onSearch={handleSearch} onReverse={handleReverse} />

      {error && (
        <Alert severity="error" sx={{ mt: 3 }}>
          {error}
        </Alert>
      )}

      {reverseLink && (
        <Alert severity="info" sx={{ mt: 3 }}>
          Reverse link:{" "}
          <Link href={reverseLink} target="_blank" rel="noopener noreferrer">
            {reverseLink}
          </Link>
        </Alert>
      )}

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {results.map((r, i) => (
          <Grid item key={i}>
            <ResultCard {...r} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
