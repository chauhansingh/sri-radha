import './userList.css'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../dummyData'
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function UserList() {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) =>{
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 190, renderCell: (params) => {
            return (
                <div className='userlist-user'>
                    <img src={params.row.avatar} alt="" className='userlist-img'/>
                    {params.row.username}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transactions',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className='userlist-edit'>Edit</button>
                        </Link>
                        <RiDeleteBin6Line className='userlist-icon-delete' onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
    ];

    return (
        <div class="user-list">
            <DataGrid
                disableSelectionOnClick
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
    
}
