import React from 'react';
import { Helmet } from 'react-helmet';
import { PapperBlock } from 'enl-components';
import { ControlCard } from 'enl-components';
class NewsPage extends React.Component {
    render() {
        const title = 'Enlite Prime.News Page';
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
                <PapperBlock title="News Blog" desc="Latest News Card With">
                    <ControlCard />
                </PapperBlock>
            </div>
        );
    }
}

export default NewsPage;