import { randomUUID } from "node:crypto";

interface IMovieInput {
  title: string;
  description: string;
  year: number;
}

interface IMovieOutput extends IMovieInput {
  id: string;
}

interface IService {
  getAll: () => IMovieOutput[];
  getById: (id: string) => IMovieOutput;
  create: (movie: IMovieInput) => IMovieOutput;
  delete: (id: string) => IMovieOutput;
}

interface IController {
  getMovies: () => IResponse;
  getMovieById: (request: IRequest) => IResponse;
  createMovie: (request: IRequest) => IResponse;
  deleteMovie: (request: IRequest) => IResponse;
}

interface IRequest {
  params?: any;
  body?: any;
  query?: any;
}
interface IResponse {
  statusCode: number;
  body: any;
}

class Service implements IService {
  private movies: IMovieOutput[] = [];
  getAll(): IMovieOutput[] {
    return this.movies;
  }
  getById(id: string): IMovieOutput {
    const movieById = this.movies.find((m) => m.id === id);
    if (!movieById) {
      throw new Error("Movie not found");
    }
    return movieById;
  }
  create(movie: IMovieInput): IMovieOutput {
    const id = randomUUID();
    const newMovie = { ...movie, id: id };
    this.movies.push(newMovie);
    return newMovie;
  }
  delete(id: string): IMovieOutput {
    const deletedMovie = this.getById(id);
    this.movies.map((movie, index) => {
      if (movie.id === id) {
        this.movies.splice(index, 1);
      }
    });
    return deletedMovie;
  }
}

class Controller implements IController {
  constructor(private service: Service) {}

  getMovies(): IResponse {
    try {
      const allMovies = this.service.getAll();

      return {
        body: allMovies,
        statusCode: 200,
      };
    } catch (error) {
      return {
        body: { message: "Erro no servidor" },
        statusCode: 400,
      };
    }
  }
  getMovieById(request: IRequest): IResponse {}
  createMovie(request: IRequest): IResponse {}
  deleteMovie(request: IRequest): IResponse {}
}

const service = new Service();
const controller = new Controller(service);

controller.createMovie({ description: "teste", title: "teste", year: 2000 });
controller.createMovie({ description: "teste2", title: "teste2", year: 2005 });
const allMovies = controller.getMovies();
console.log(allMovies);
