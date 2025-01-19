import React, { useEffect, useState } from 'react';
import UseAuth from '../../../hooks/UseAuth';
// import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

const AdoptionRequests = () => {
    const axiosSecure = useAxiosSecure();
    const [data, setData] = useState([]);
    const [sorting, setSorting] = useState([]); // State to manage sorting
    const { user } = UseAuth();
    // const { enqueueSnackbar } = useSnackbar();

//    const {data: adoptions} = useQuery({
//     queryKey: ['adoptions'],
//     queryFn: async () => {
//         const res = await axiosSecure.get(`/adoptions/user/${user.email}`);
//         return res.data;
//     }
//  })

    // Fetch data from the server
    const fetchData = async () => {
        try {
            const response = await axiosSecure.get(`/adoptions/user/${user?.email}`);
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


 
    // Define table columns
    const columnsDiff = [
        {
            header: 'Serial No', 
            cell: (info) => info.row.index + 1, 
        },
        {
            accessorKey: 'userName',
            header: 'name',
        },
        {
            accessorKey: 'userEmail',
            header: 'Email',
        },
        {
            accessorKey: 'phone',
            header: 'Phone',
        },
        {
            accessorKey: 'address',
            header: 'Location',
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
                                    <div className="flex justify-center space-x-2">
                                      
                                        <Button
                                            className="bg-green-600 text-white p-2 hover:bg-red-700"
                                            onClick={() => handleAccept(row.original)}
                                        >
                                            Accept 
                                        </Button>
                                        <Button
                                            className="p-2 bg-red-600 text-white hover:bg-green-700"
                                            onClick={() => handleReject(row.original)}
                                            disabled={row.original.adopted}
                                        >
                                            Reject 
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

export default AdoptionRequests;