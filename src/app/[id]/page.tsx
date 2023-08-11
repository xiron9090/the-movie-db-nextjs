"use client"
import Link from '@/components/Link';
import { useAppDispatch, useAppSelector } from '@/store';
import { movieSelector } from '@/store/movie.slide';
import { getDetailsMovie } from '@/store/movies.thunks';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography,Link as MUILink  } from '@mui/material';
import { useEffect } from 'react';

const MovieDetails = ({ params }: { params: { id: string } }) => {
  const dispatch = useAppDispatch();
  const { details } = useAppSelector(movieSelector);
  useEffect(()=>{
    dispatch(getDetailsMovie(params.id))
  },[])
    return (
      <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {details.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {details.release_date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {details.overview}
            </Typography>
           <Link href='/'>Back</Link>
          </CardContent>
          {/* <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={details.}
            alt={post.imageLabel}
          /> */}
        </Card>
      </CardActionArea>
    </Grid>
    );
  };
  export default MovieDetails;
  