"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { movieSelector } from "@/store/movie.slide";
import { getPopularMovie } from "@/store/movies.thunks";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loadin";
import { CardComponent } from "@/components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box, Typography } from "@mui/material";

export default function Home() {
  const dispatch = useAppDispatch();
  const { popular } = useAppSelector(movieSelector);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getPopularMovie(page));
  }, []);
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <InfiniteScroll
          next={() => {
            dispatch(getPopularMovie(page + 1));
            setPage((preventValue) => preventValue + 1);
          }}
          hasMore={true}
          loader={<Loading />}
          dataLength={popular.length}
          endMessage={<Typography>Nothing more to show</Typography>}
        >
          {popular.map((item, index) => (
            <Box key={item.id} mt={5} mb={5} mr={5} ml={5}>
              <CardComponent item={item} />
            </Box>
          ))}
        </InfiniteScroll>
      </Suspense>
    </main>
  );
}
