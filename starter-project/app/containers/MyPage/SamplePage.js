import React from 'react';
import { Helmet } from 'react-helmet';
import { PapperBlock,SampleComponent} from 'enl-components';

class SamplePage extends React.Component {
  render() {
    const title = 'Enlite Prime. Blank Page';
    const description = 'Enlite Prime';
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Sample Page" desc="This Is Demo page ">
        <h1>Demo Page</h1>
        </PapperBlock>
      </div>
    );  
  } 
}

export default SamplePage;  