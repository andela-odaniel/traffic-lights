import React, { Component } from 'react';
import { Header, Footer } from 'components';

const siteName = 'Traffic Lights';

class App extends Component {
  constructor() {
    super();
    this.setState = {
      val: 0,
    };
  }

  render() {
    return (
      <div>
        <Header name={siteName} />
        <main>
          <p>Main content</p>
        </main>
        <Footer name={siteName} />
      </div>
    );
  }
}

export default App;
