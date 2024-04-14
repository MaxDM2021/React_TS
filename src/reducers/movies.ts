import { title } from "process";
import { Action, Reducer } from "redux";


export interface Movie {
    id: number;
    title: string;
    popularity: number;
    overview: string;
}

interface MovieState {
    top: Movie[]
}

const initialState: MovieState = {
    top: [
        {
            id: 1,
            title: "Inception",
            popularity: 98,
            overview: "Dreams..."
        },
        {
            id: 2,
            title: "The GodFather",
            popularity: 97,
            overview: "TheGodFather..."
        },
        {
            id: 3,
            title: "The Dark Knight",
            popularity: 98,
            overview: "Batman..."
        },
        {
            id: 4,
            title: "The GodFather Part II",
            popularity: 98,
            overview: "Part II..."
        }

    ]
} 

const moviesReducer: Reducer<MovieState, Action> = (state, action) => {
return initialState;
}

export default moviesReducer;