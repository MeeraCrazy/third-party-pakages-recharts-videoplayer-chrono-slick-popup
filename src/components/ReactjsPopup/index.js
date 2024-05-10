import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const overlayStyle = {
  backgroundColor: '#ffff',
}

const ReactjsPopup = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Trigger
        </button>
      }
      position="top left"
      overlayStyle={overlayStyle}
    >
      {close => (
        <div>
          <p className="paragraph">
            React is a popular and widely used programming language
          </p>
          <button
            className="trigger-button"
            type="button"
            onClick={() => close()}
          >
            Close
          </button>
        </div>
      )}
    </Popup>
  </div>
)

export default ReactjsPopup
