// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
// import UseAuth from '../../../hooks/UseAuth';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


// const AdminHome = () => {
//     const { user } = UseAuth();
//     const axiosSecure = useAxiosSecure();

//     const { data: stats } = useQuery({
//         queryKey: ['admin-stats'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/admin-stats');
//             return res.data;
//         }
//     })
//     const getPath = (x, y, width, height) => {
//         return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//         ${x + width / 2}, ${y}
//         C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//         Z`;
//       };

//     const TriangleBar = (props) => {
//         const { fill, x, y, width, height } = props;
      
//         return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
//       };
//     return (
//         <div>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
//                 <div>
//                    <h2>${stats?.users}</h2>
//                 </div>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//             </div>

        
//         </div>
        
//     );
// };

// export default AdminHome;