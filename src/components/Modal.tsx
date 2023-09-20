import CarForm from "./CarForm";

type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div
            onClick={ props.onClose }
            className="fixed w-full h-full flex overflow-auto z-1
            justify-center align-middle bg-orange-600 bg-opacity-50"
        >
            <div
                className="max-w-600px w-2/5 fixed flex z-1 mt-20 bg-indigo-600 shadow-xl rounded text-white"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start m-3 bg-orange-300 p-2 rounded hover:bg-indigo-800 text-white"
                        onClick={ props.onClose}>
                            X
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <CarForm id={ props.id } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
