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
const AllDonations = () => {

    const axiosSecure = useAxiosSecure();
    const [data, setData] = useState([]);
    console.log(data)
    const [sorting, setSorting] = useState([]); // State to manage sorting
    const { user } = UseAuth();
    const { enqueueSnackbar } = useSnackbar();


    // Fetch data from the server
    const fetchData = async () => {
        try {
            const response = await axiosSecure.get("/admin/all-donationCampaigns");
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


    // Delete record
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {
            const { data } = await axiosSecure.delete(`/donationCampaigns/${id._id}`);
            console.log(data)
            if (data.deletedCount > 0) {
                Swal.fire({
                    title: 'Pets Deleted!',
                    text: 'Your donation has been deleted successfully.',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                });
                fetchData();
            }
        }
    };

    // Updated handleDonationStopped function
const handleDonationStopped = async (rowData) => {
    const updatedStatus = !rowData.isDonationStopped; // Toggle the current status
    try {
        const response = await axiosSecure.patch(`/admin/paused/${rowData._id}`, { isDonationStopped: updatedStatus });
        if (response.data.modifiedCount > 0) {
            const message = updatedStatus ? 'Donation stopped successfully!' : 'Donation resumed successfully!';
            enqueueSnackbar(message, { variant: 'success', autoHideDuration: 1000 });
            fetchData(); // Refresh data after update
        } else {
            enqueueSnackbar('Failed to update donation status.', { variant: 'error', autoHideDuration: 1000 });
        }
    } catch (error) {
        enqueueSnackbar('An error occurred while updating donation status.', { variant: 'error', autoHideDuration: 1000 });
    }
};


    // Define table columns
    const columnsDiff = [
        {
            header: 'Serial No',
            cell: (info) => info.row.index + 1,
        },
        {
            accessorKey: 'petImage',
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
            accessorKey: 'name',
            header: 'Pet Name',
        },
        {
            accessorKey: 'category',
            header: 'Category',
        },
    ];

    // Create a table instance
    const tableInstance = useReactTable({
        columns: columnsDiff,
        data: data,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 10, // Set to show a maximum of 10 pets
            },
        },
    });


    return (
        <div className="bg-gray-100 rounded-lg shadow-md">
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border-collapse border border-gray-200 rounded-md shadow-md">
                    <thead className="bg-primary text-center text-white">
                        {tableInstance.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
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
                                <th className="px-4 py-3 text-sm font-medium tracking-wide">Donation Status</th>
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
                                <td className="px-4 py-3 border-b border-gray-200 text-sm">
                                    {row.original.isDonationStopped ? (
                                        <span className="text-green-600 p-1 bg-green-50 rounded-lg font-semibold">Paused</span>
                                    ) : (
                                        <span className="text-red-700 bg-red-50 p-1 rounded-lg font-semibold">unpaused</span>
                                    )}
                                </td>
                                <td className="px-4 py-3 border-b border-gray-200 text-sm">
                                    <div className="flex justify-center space-x-2">
                                        <Button
                                            className="bg-red-600 text-white p-2 hover:bg-red-700"
                                            onClick={() => handleDelete(row.original)}
                                        >
                                            Delete
                                        </Button>
                                        <Link to={`/dashboard/updateDonation/${row.original._id}`}>
                                            <Button
                                                className=" bg-blue-600 p-2 text-white hover:bg-blue-700"
                                                onClick={() => handleUpdate(row.original)}
                                            >
                                                Update
                                            </Button>
                                        </Link>
                                        <Button
                                            className={`p-2 text-white ${row.original.donatedAmount >= row.original.maxDonation || row.original.isDonationStopped ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
                                            onClick={() => handleDonationStopped(row.original)}
                                        >
                                            {
                                                row.original.donatedAmount >= row.original.maxDonation || row.original.isDonationStopped
                                                    ? 'Stop'
                                                    : 'Push'
                                            }
                                        </Button>

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            {data.length > 10 && (
                <div className="flex flex-col md:flex-row items-center justify-between mt-6 space-y-4 md:space-y-0">
                    <div className="flex space-x-2">
                        <Button
                            onClick={() => tableInstance.setPageIndex(0)}
                            disabled={!tableInstance.getCanPreviousPage()}
                            className="btn btn-sm bg-primary text-white disabled:bg-gray-400"
                        >
                            <SlArrowLeft className='text-white font-bold text-lg' />
                        </Button>
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

                    <div>
                        <select
                            value={tableInstance.getState().pagination.pageSize}
                            onChange={(e) => tableInstance.setPageSize(Number(e.target.value))}
                            className="select select-bordered select-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            {[10, 20].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllDonations;