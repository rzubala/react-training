# React

## useEffect axios and fetch cleanup

```js
useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;

  fetch(API, {
    signal: signal,
  })
    .then((response) => response.json())
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        console.log("successfully aborted");
      } else {
        // handle error
      }
    });
  return () => {
    // cancel the request before component unmounts
    controller.abort();
  };
}, []);

useEffect(() => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  axios
    .get(API, {
      cancelToken: source.token,
    })
    .catch((err) => {
      if (axios.isCancel(err)) {
        console.log("successfully aborted");
      } else {
        // handle error
      }
    });
  return () => {
    // cancel the request before component unmounts
    source.cancel();
  };
}, []);
```

### dependency array

- Giving it an empty array acts like componentDidMount as in, it only runs once.
- Giving it no second argument acts as both componentDidMount and componentDidUpdate, as in it runs first on mount and then on every re-render.
- Giving it an array as second argument with any value inside, eg , [variable1] will only execute the code inside your useEffect hook ONCE on mount, as well as whenever that particular variable (variable1) changes.

## Error Boundary

```js
class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  incrementCounter() {
    this.setState((prevState) => (counterValue = prevState + 1));
  }
  render() {
    if (this.state.counter === 2) {
      throw new Error("Crashed");
    }
    return (
      <div>
        <button onClick={this.incrementCounter}>Increment Value</button>
        <p>Value of counter: {this.state.counterValue}</p>
      </div>
    );
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h4>Something went wrong</h4>;
    }
    return this.props.children;
  }
}

<ErrorBoundary>
 <CounterComponent/>
</ErrorBoundary>
```
