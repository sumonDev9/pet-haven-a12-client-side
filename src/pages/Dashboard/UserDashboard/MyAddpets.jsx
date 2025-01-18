import React, { useEffect, useState } from 'react';
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import UseAuth from '../../../hooks/UseAuth';
import { Button } from '@material-tailwind/react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useSnackbar } from 'notistack';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyAddpets = () => {
    const axiosSecure = useAxiosSecure();
    const [data, setData] = useState([]);
    const [sorting, setSorting] = useState([]); // State to manage sorting
    const { user } = UseAuth();
    const { enqueueSnackbar } = useSnackbar();

    // Fetch data from the server
    const fetchData = async () => {
        try {
            const response = await axiosSecure.get(`/pets/user/${user?.email}`);
            setData(response.data); // Set the fetched data to state
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Initial data fetch
    useEffect(() => {
        fetchData();
    }, [axiosSecure]);

    //  delete record

    const handleDelete = async(id) => {
        // alert(id._id)
        // alert(`Update functionality for ${pet.name} is under development.`);
        const result =  await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {
          const { data } = await axiosSecure.delete(`/pets/${id._id}`);
          console.log(data)
          if (data.deletedCount > 0) {
            Swal.fire({
              title: 'pets Deleted!',
              text: 'Your pets has been deleted successfully.',
              icon: 'success',
              confirmButtonText: 'Okay',
            });
            fetchData();
          }
        }

    }

    //  update record
    const handleUpdate = (id) => {
        alert(id._id);
    }



    const handleAdopt = async (id) => {
        try {
            // Send a request to update the adopted status in the database
            const response = await axiosSecure.patch(`/pets/adopt/${id._id}`, { adopted: true });
            if (response.data.modifiedCount > 0) {
                enqueueSnackbar('Adoption status updated successfully!', { variant: 'success', autoHideDuration: 1000  });
                fetchData(); 
            } else {
                enqueueSnackbar('Failed to update adoption status.!', { variant: 'error', autoHideDuration: 1000  });
            }
        } catch (error) {
            enqueueSnackbar('An error occurred while updating adoption status.', { variant: 'error', autoHideDuration: 1000  });
        }
    };




    // Define table columns

    const columnsDiff = [
        {
            header: 'Serial No', // Column header
            cell: (info) => info.row.index + 1, // Dynamically calculate row index
        },
        {
            accessorKey: 'name',
            header: 'Pet Name',
        },
        {
            accessorKey: 'image',
            header: 'Pet Image',
            cell: info => (
                <img
                    src={info.getValue()}
                    alt="Pet"
                    style={{ width: '50px', height: '50px', margin: "auto", borderRadius: '8px' }}
                />
            ),
        },
        {
            accessorKey: 'category',
            header: 'Category',
        },

    ];

    // Create a table instance
    const tableInstance = useReactTable({
        columns: columnsDiff,
        data: data, // Use dynamic data
        state: { sorting }, // Pass sorting state to the table
        onSortingChange: setSorting, // Handle sorting changes
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(), // Enable sorting
        getPaginationRowModel: getPaginationRowModel(), // Enable pagination
        initialState: {
            pagination: {
                pageSize: 5, // Default rows per page
            },
        },
    });

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border-collapse border border-gray-200 rounded-md shadow-md">
                    <thead className="bg-primary text-center text-white">
                        {tableInstance.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()} // Enable sorting on click
                                        className="px-4 py-3 text-sm font-medium tracking-wide cursor-pointer"
                                        style={{ userSelect: 'none' }}
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {header.column.getIsSorted() === 'asc' && (
                                            <span className="text-sm bg-white ml-1">🔼</span>
                                        )}
                                        {header.column.getIsSorted() === 'desc' && (
                                            <span className="text-sm ml-1">🔽</span>
                                        )}
                                    </th>
                                ))}
                                <th className="px-4 py-3 text-sm font-medium tracking-wide">Adoption Status</th>
                                <th className="px-4 py-3 text-sm font-medium tracking-wide">Actions</th>
                            </tr>
                        ))}
                    </thead>
                    <tbody className="bg-white text-center">
                        {tableInstance.getRowModel().rows.map((row) => (
                            <tr
                                key={row.id}
                                className="hover:bg-indigo-100 transition-colors duration-200"
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className="px-4 py-3 border-b border-gray-200 text-sm"
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                                {/* Adoption Status */}
                                <td className="px-4 py-3 border-b border-gray-200 text-sm">
                                    {row.original.adopted ? (
                                        <span className="text-green-600 p-1 bg-green-50 rounded-lg font-semibold">Adopted</span>
                                    ) : (
                                        <span className="text-red-700 bg-red-50 p-1 rounded-lg font-semibold">Not Adopted</span>
                                    )}
                                </td>
                                {/* Action Buttons */}
                                <td className="px-4 py-3 border-b border-gray-200 text-sm">
                                    <div className="flex justify-center space-x-2">
                                        {/* Update Button */}
                                        <Link to={`/dashboard/updatePet/${row.original._id}`}>
                                            <Button
                                                className=" bg-blue-600 p-2 text-white hover:bg-blue-700"
                                                onClick={() => handleUpdate(row.original)}
                                            >
                                                Update
                                            </Button>
                                        </Link>
                                        {/* Delete Button */}
                                        <Button
                                            className="bg-red-600 text-white p-2 hover:bg-red-700"
                                            onClick={() => handleDelete(row.original)}
                                        >
                                            Delete
                                        </Button>
                                        {/* Adopted Button */}
                                        <Button
                                            className="p-2 bg-green-600 text-white hover:bg-green-700"
                                            onClick={() => handleAdopt(row.original)}
                                            disabled={row.original.adopted}
                                        >
                                            Adopted
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-6 space-y-4 md:space-y-0">
                {/* Navigation Buttons */}
                <div className="flex space-x-2">
                    <Button
                        onClick={() => tableInstance.setPageIndex(0)}
                        disabled={!tableInstance.getCanPreviousPage()}
                        className="btn btn-sm bg-primary text-white disabled:bg-gray-400 "
                    >
                        <SlArrowLeft className='text-white font-bold text-lg' />
                    </Button>
                    {/* Page Number Buttons */}
                    <div className="flex space-x-2">
                        {Array.from({ length: tableInstance.getPageCount() }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => tableInstance.setPageIndex(index)}
                                className={`w-8 h-8 flex items-center justify-center rounded-full border ${tableInstance.getState().pagination.pageIndex === index
                                    ? 'bg-primary text-white'
                                    : 'bg-white text-secondary hover:bg-indigo-100'
                                    } focus:outline-none`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <Button
                        onClick={() => tableInstance.setPageIndex(tableInstance.getPageCount() - 1)}
                        disabled={!tableInstance.getCanNextPage()}
                        className="btn btn-sm bg-primary text-white disabled:bg-gray-400"
                    >
                        <SlArrowRight className='text-white font-bold text-lg' />
                    </Button>
                </div>

                {/* Page Info
                 <div className="flex items-center space-x-2">
                     <span className="text-sm">
                         Page{' '}
                         <strong>{tableInstance.getState().pagination.pageIndex + 1}</strong> of{' '}
                         <strong>{tableInstance.getPageCount()}</strong>
                     </span>
                     <span className="text-sm">| Go to page:</span>
                     <input
                         type="number"
                         min="1"
                         max={tableInstance.getPageCount()}
                         defaultValue={tableInstance.getState().pagination.pageIndex + 1}
                         onChange={(e) => {
                             const page = e.target.value ? Number(e.target.value) - 1 : 0;
                             tableInstance.setPageIndex(page);
                         }}
                         className="input input-bordered input-sm w-16 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                     />
                 </div> */}

                {/* Rows per Page */}
                <div>
                    <select
                        value={tableInstance.getState().pagination.pageSize}
                        onChange={(e) => tableInstance.setPageSize(Number(e.target.value))}
                        className="select select-bordered select-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        {[5, 10, 20].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default MyAddpets;