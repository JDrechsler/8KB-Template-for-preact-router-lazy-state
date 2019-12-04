import { Component, h } from 'preact';
import { Suspense, lazy } from 'preact/compat';
import { view } from 'z-preact-easy-state';

const LazyAboutComp = lazy(() => import('@components/LazyAboutComp'));

class AboutPage extends Component {
  render() {
    return (
      <section>
        <h2>Pizza</h2>

        <Suspense fallback={<div>Loading...</div>}>
          <LazyAboutComp />
        </Suspense>
      </section>
    );
  }
}

export default view(AboutPage);
