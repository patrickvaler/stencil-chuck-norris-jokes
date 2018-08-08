import { Component, Prop, State } from '@stencil/core';

interface Joke {
  id: string;
  value: string;
}

const GetRandomJokeUrl = 'https://api.chucknorris.io/jokes/random';

@Component({
  tag: 'chuck-norris-jokes',
  styleUrl: './chuck-norris-jokes.scss'
})
export class ChuckNorrisJokes {
  error = false;
  @State()
  _joke: Joke;

  set joke(joke: Joke) {
    if (this.firstname) {
      joke.value = joke.value.replace(/Chuck/gi, this.firstname);
    }

    if (this.lastname) {
      joke.value = joke.value.replace(/Norris/gi, this.lastname);
    }

    this._joke = joke;
  }
  get joke(): Joke {
    return this._joke;
  }

  @Prop()
  firstname: string;
  @Prop()
  lastname: string;

  componentWillLoad() {
    this.fetchRandomJoke();
  }

  fetchRandomJoke() {
    fetch(GetRandomJokeUrl)
      .then(this.handleError)
      .then(this.transformResponse)
      .then((joke: Joke) => (this.joke = joke))
      .catch(() => (this.error = true));
  }

  handleError(response): any {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }

  transformResponse(json: any): Joke {
    return { id: json.id, value: json.value };
  }

  handleNext(_event) {
    this.fetchRandomJoke();
  }

  render() {
    // No data yet?
    if (!this.joke) {
      return <span>Loading</span>;
    } else if (this.error) {
      return <p>Error</p>;
    }

    return (
      <div class="joke">
        <p class="joke__text">"{this.joke.value}"</p>
        <div class="btn-group">
          <button class="btn joke__action" onClick={(event: UIEvent) => this.handleNext(event)}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
