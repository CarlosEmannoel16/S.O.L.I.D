//Maneira errada de implementar

class Movie2 {
  name: string;
  category: string;

  public play() {
    // play no video
  }

  increaseVolume(): void {
    throw new Error("Method not implemented.");
  }
}

class DramaCategory2  {
  movie: Movie;

  constructor(movie: Movie) {
    this.movie = movie;
  }

  playDramaMovie(): void {
    this.movie.play();
  }
}


/////////////////////////////////////////////////// 
///Maneira coreta de implementar

interface IMovie {
   play(): void;
}

interface IAudioControl {
  increaseVolume(): void;
}

class Movie implements IMovie, IAudioControl {

  name: string;
  category: string;

  public play() {
    // play no video
  }

  increaseVolume(): void {
    throw new Error("Method not implemented.");
  }

}

class DramaCategory  {
  movie: IMovie;

  constructor(movie: IMovie) {
    this.movie = movie;
  }

  playDramaMovie(): void {
    this.movie.play();
  }
}


