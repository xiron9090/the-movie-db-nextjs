import { IMovie, IMovieDetails } from "@/types";

export interface IMoviesState{
    popular:IMovie[],
    details:IMovieDetails
}