import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(

      <div className="footer row">
        <div className="content-footer column container-fluid">
          <div className="">
            <div className="graff text-xs-right text-success">
              <a href="https://github.com/cachilders/Phyll"><i className="fa fw fa-github-alt text-success"></i></a>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}
