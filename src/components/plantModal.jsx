import React from 'react';
// import React, {PropTypes} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
// import Modal from 'react-bootstrap-modal';

export default class View extends React.Component {

  constructor() {
  super();
  this.state={isShowingModal:false};//initate state
  }
  // state = {
  //   isShowingModal: false,
  // }
  handleClick(){
    this.setState({isShowingModal: true});
  }
  handleClose(){
    this.setState({isShowingModal: false});
  }
  render() {
    return <div onClick={this.handleClick}>Click for more info!
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={this.handleClose}>
          <ModalDialog onClose={this.handleClose}>
            <h1>Custom content from plant from props</h1>
            <p>Enter Plant Details here when Modal functioning</p>
          </ModalDialog>
        </ModalContainer>
      }
    </div>;
  }
}


// export default class View extends React.Component {
//   render() {
//     if (this.props.isOpen === false)
//       return null;

//     let modalStyle = {
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       zIndex: '9999',
//       background: '#fff'
//     };

//     let backdropStyle = {
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       top: '0px',
//       left: '0px',
//       zIndex: '9998',
//       background: 'rgba(0, 0, 0, 0.3)'
//     };

//     return (
//       <div>
//         <div style={modalStyle}>{this.props.children}</div>
//         <div style={backdropStyle} onClick={e => this.close(e)}/>}
//       </div>
//     );
//   }

//   close(e) {
//     e.preventDefault()

//     if (this.props.onClose) {
//       this.props.onClose()
//     }
//   };
// }








/* ----------------- React Bootstrap Modal ------------------- */
//   render(){
//     let closeModal = () => this.setState({ open: false })

//     let saveAndClose = () => {
//       api.saveData()
//         .then(() => this.setState({ open: false }))
//     }

//     return (
//       <div>
//         <button type='button'>Launch modal</button>

//         <Modal
//           show={this.state.open}
//           onHide={closeModal}
//           aria-labelledby="ModalHeader"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p>Some Content here</p>
//           </Modal.Body>
//           <Modal.Footer>
//             <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
//             <button className='btn btn-primary' onClick={saveAndClose}>
//               Save
//             </button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     )

//   }

// }











/*
import React from 'react';

export default class plantModal extends React.createClass {

 constructor() {
    super();
  }

  getInitialState() {
    return { show: false };
  }

  render() {
    let close = () => this.setState({ show: false});

    return (
      <div className="modal-container" style={{height: 200}}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true})}
        >
          Launch contained modal
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

*/
