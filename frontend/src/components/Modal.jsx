function Modal({ children, close }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-80 relative">
        <button
          className="absolute top-2 right-2"
          onClick={close}
        >
          
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;