import './Popup.css';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

function Popup({ isOpen, onClose, message }: PopupProps) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={onClose} className="popup-close">x</button>
        <div className="popup-message">{message}</div>
      </div>
    </div>
  );
}

export default Popup;
