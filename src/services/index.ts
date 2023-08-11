import customeAxios from '../api/index';
import { DETAILS_MOVIE, POPULAR_MOVIE } from '../api/endpoints';
import { IMovieDetails, IPopularMovie } from '@/types';
import { AxiosResponse } from 'axios';

export const getPopularMoviesService =async(page:number):Promise<AxiosResponse<IPopularMovie>>=>{
    return await customeAxios.get<IPopularMovie>(POPULAR_MOVIE,{params:{page}})
}
export const getDetailsMovieService =async(id:string):Promise<AxiosResponse<IMovieDetails>>=>{
    return await customeAxios.get<IMovieDetails>(DETAILS_MOVIE(id))
}