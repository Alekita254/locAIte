import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import type { SearchResult } from "../types/SearchResult";

export default function ResultCard({ title, url, source }: SearchResult) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea href={source} target="_blank" rel="noopener noreferrer">
        <CardMedia component="img" height="180" image={url} alt={title} />
        <CardContent>
          <Typography variant="subtitle1" noWrap>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
