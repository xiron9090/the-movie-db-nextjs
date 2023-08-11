"use client"

import { IMovie, IPopularMovie } from "@/types"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import Image from "next/image"
import Link from "../Link"
type CardComponentProps={
item:IMovie
}
export const CardComponent = ({item}:CardComponentProps)=>{
    const {poster_path,title,overview,id} = item
    return(
        <Card  >
      <Image  src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={""}        
        width={240} height={340}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`${id}`}>

        <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
    )
}