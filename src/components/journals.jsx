import React from 'react';

export default class Journals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let entries = this.props.journals.rss.channel[0].item;

    return (

      <div className="card">
        <div className="card-header">
          How we got here
        </div>
        <div className="card-group">
        {
          entries.map(entry => {
            console.log(entry);

            return (

              <div className="card-block" key={ entry.pubDate[0] }>
                <div className="container-fluid">
                  <a href={ entry.link[0] }><h4>{ entry.title[0] }</h4>
                  <div className="graff text-muted">{ entry.pubDate[0] }</div></a>
                </div>
              </div>
              
            );

          })
        }
        </div>
      </div>
      
    );
  }
}
