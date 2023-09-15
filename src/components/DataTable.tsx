import Button from './Button';
import Modal from './Modal';
import { useState } from 'react';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hideable: true },
    { field: 'make', headerName: "Make", flex: 1 },
    { field: 'model', headerName: "Model", flex: 1},
    { field: 'year', headerName: "Year", flex: 1 },
    { field: 'transmission', headerName: "Transmission", flex: 2}
]

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { carData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])
    // TODO write useGetData hook and selection model state change content

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-orange-300 m-3 rounded hover:bg-orange-600 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Create New Car Entry
                </button>
            </div>
            <Button onClick={handleOpen} className='p-3 bg-orange-300 m-3 rounded hover:bg-orange-600 hover:text-white'>Update</Button>
            <Button onClick={deleteData} className='p-3 bg-orange-300 m-3 rounded hover:bg-orange-600 hover:text-white'>Delete</Button>
        </div>
        <div className={ open ? "hidden" : 'container mx-10 flex flex-col'}
            style={{ height:400, width: '100%' }}
            >
                <h2 className='p-3 bg-orange-300 my-2 rounded text-center'>My Contacts</h2>
                <DataGrid rows={carData} columns={columns} pageSizeOptions={[5]}
                checkboxSelection={true}
                onRowSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }} />
        </div>
    </>
  )
}

export default DataTable
