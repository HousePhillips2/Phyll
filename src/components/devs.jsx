import React from 'react';

export default class Devs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="card">
        <div className="card-header">
          Who we are
        </div>
        <div className="card-group">
        {
          this.props.devs.map(dev => {

            return (
              <div className="card-block" key={ dev.id }>
                <div className="media">
                  <a className="media-left" href={ dev.git }><img className="img-rounded" style={ {width: '85px', height: '85px'} } src={ dev.img }/></a>
                  <div className="media-body">
                    <div className="container-fluid">
                      <h4 className="head">{ dev.user_name }</h4>
                      <div className="graff">{ dev.bio }</div>
                    </div>
                  </div>
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
