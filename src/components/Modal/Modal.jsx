import './Modal.css'

export const Modal = ({modalTitle, show, modalText, closeModal}) => {

  return (
    <div className={`modal ${show ? 'modal_opened' : ''}`}>
      <div className='modal__content'>
        <button onClick={closeModal} type="button" className="modal__close"></button>
        <h3 className='modal__title'>{modalTitle}</h3>
        <p className="modal__text"> {modalText}</p>
        <button onClick={closeModal} className='modal__button'>Закрыть</button>
      </div>

    </div>
  );
};