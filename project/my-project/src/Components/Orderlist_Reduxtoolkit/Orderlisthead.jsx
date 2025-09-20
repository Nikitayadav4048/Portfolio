
// import React from 'react';
// import './orderlisthead.css';
// import Navbar from '../homecomponent/Navbar';
// import Footer from '../homecomponent/Footer';
// import Dashboard from './Dashbord';
// import OrderDetails from './Orderdetails';
// import { useSelector, useDispatch } from 'react-redux';
// import { handleDetails, handleBack, handleAccept, handleComplete, handleFilter } from '../Orderlist_Reduxtoolkit/ordersSlice';

// const Orderlisthead = () => {
//   const dispatch = useDispatch();
//   const { filteredData, selectedOrder, ordersCount, outForDeliveryCount, completeCount } = useSelector(state => state.orders);

//   if (!filteredData) {
//     return <div>Loading...</div>;
//   }

//   console.log('Orders Count:', ordersCount); // Debugging log

//   return (
//     <>
//       {!selectedOrder && <Navbar />}
//       {selectedOrder ? (
//         <OrderDetails order={selectedOrder} onBack={() => dispatch(handleBack())} onComplete={() => dispatch(handleComplete(selectedOrder.id))} />
//       ) : (
//         <>
//           <div className="orderlistheader text-center justify-center py-40">
//             <h1 className="">Orders</h1>
//             <p>Your Route, Your Earnings</p>
//           </div>
//           <Dashboard 
//             ordersCount={ordersCount}
//             outForDeliveryCount={outForDeliveryCount}
//             completeCount={completeCount}
//             onFilter={(status) => dispatch(handleFilter(status))}
//           />
//           <div className="container mx-auto p-6 tablecon overflow-x-auto">
//             <h2 className="text-xl font-semibold mb-6 ml-6">Today's Orders</h2>
//             <table className="min-w-full bg-white text-center justify-center">
//               <thead className="bg-orange-300">
//                 <tr>
//                   <th className="py-2 px-4 border-b">Order ID</th>
//                   <th className="py-2 px-4 border-b">Name</th>
//                   <th className="py-2 px-4 border-b">Order Date</th>
//                   <th className="py-2 px-4 border-b">Delivery Date</th>
//                   <th className="py-2 px-4 border-b">SubTotal</th>
//                   <th className="py-2 px-4 border-b">Income</th>
//                   <th className="py-2 px-4 border-b" colSpan="2">Location</th>
//                   <th className="py-2 px-4 border-b">Vehicle</th>
//                   <th className="py-2 px-4 border-b status-column">Status</th>
//                   <th className="py-2 px-4 border-b" colSpan="2">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredData.map((item) => (
//                   <tr key={item.id}>
//                     <td className="py-2 px-4 border-b" data-label="Order ID">{item.id}</td>
//                     <td className="py-2 px-4 border-b" data-label="Name">{item.name}</td>
//                     <td className="py-2 px-4 border-b" data-label="Order Date">{item.orderdate}</td>
//                     <td className="py-2 px-4 border-b" data-label="Delivery Date">{item.deliverydate}</td>
//                     <td className="py-2 px-4 border-b" data-label="SubTotal">{item.subtotal}</td>
//                     <td className="py-2 px-4 border-b" data-label="Income">{item.income}</td>
//                     <td className="py-2 px-4 border-b" data-label="Location From">{item.from}</td>
//                     <td className="py-2 px-4 border-b" data-label="Location To">{item.to}</td>
//                     <td className="py-2 px-4 border-b" data-label="Vehicle">{item.vehicle}</td>
//                     <td className="py-2 px-4 border-b status-column" data-label="Status">{item.status}</td>
//                     <td className="py-2 px-4 border-b flex justify-center items-center">
//                       {item.status === 'Delivered' ? (
//                         <button className="btn-color font-bold py-1 px-2 rounded border-none" disabled>
//                           Completed
//                         </button>
//                       ) : item.status === 'Out for Delivery' ? (
//                         <button onClick={() => dispatch(handleDetails(item))} className="btn-color hover:bg-orange-500 font-bold py-1 px-2 rounded border-none">
//                           Details
//                         </button>
//                       ) : (
//                         <div className="flex space-x-2">
//                           <button onClick={() => dispatch(handleAccept(item.id))} className="btn-color hover:bg-orange-500 font-bold py-1 px-2 rounded border-none">
//                             Accept
//                           </button>
//                           <button className="bg-black hover:bg-black text-white font-bold py-1 px-2 rounded border-none">Reject</button>
//                         </div>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//       {!selectedOrder && <Footer />}
//     </>
//   );
// };

// export default Orderlisthead;


// import React from 'react';
// import './orderlisthead.css';
// import Navbar from '../homecomponent/Navbar';
// import Footer from '../homecomponent/Footer';
// import Dashboard from './Dashbord';
// import OrderDetails from './Orderdetails';
// import { useSelector, useDispatch } from 'react-redux';
// import { handleDetails, handleBack, handleAccept, handleComplete, handleFilter } from '../Orderlist_Reduxtoolkit/ordersSlice';

// const Orderlisthead = () => {
//   const dispatch = useDispatch();
//   const { filteredData, selectedOrder, ordersCount, outForDeliveryCount, completeCount } = useSelector(state => state.orders);

//   if (!filteredData) {
//     return <div>Loading...</div>;
//   }

//   console.log('Orders Count:', ordersCount); // Debugging log

//   return (
//     <>
//       {!selectedOrder && <Navbar />}
//       {selectedOrder ? (
//         <OrderDetails order={selectedOrder} onBack={() => dispatch(handleBack())} onComplete={() => dispatch(handleComplete(selectedOrder.id))} />
//       ) : (
//         <>
//           <div className="orderlistheader text-center justify-center py-40">
//             <h1 className="">Orders</h1>
//             <p>Your Route, Your Earnings</p>
//           </div>
//           <Dashboard 
//             ordersCount={ordersCount}
//             outForDeliveryCount={outForDeliveryCount}
//             completeCount={completeCount}
//             onFilter={(status) => dispatch(handleFilter(status))}
//           />
//           <div className="container mx-auto p-6 tablecon overflow-x-auto">
//             <h2 className="text-xl font-semibold mb-6 mt-8 ml-6">Today's Orders</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
//               {filteredData.map((item) => (
//                 <div key={item.id} className="bg-white p-6 rounded-lg mb-6">
//                   <div><strong>Order ID:</strong> {item.id}</div>
//                   <div><strong>Name:</strong> {item.name}</div>
//                   <div><strong>Vehicle: </strong>{item.vehicle}</div>
//                   <div><strong>Location: </strong>{item.from}</div>
//                   <div className="flex space-x-2 mt-4">
//                     <button onClick={() => dispatch(handleDetails(item))} className="btn-color hover:bg-orange-500 font-bold py-1 px-2 rounded border-none">
//                       Details
//                     </button>
//                     <button onClick={() => dispatch(handleAccept(item.id))} className="btn-color hover:bg-orange-500 font-bold py-1 px-2 rounded border-none">
//                       Accept
//                     </button>
//                     <button className="bg-black hover:bg-black text-white font-bold py-1 px-2 rounded border-none">
//                       Reject
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//       {!selectedOrder && <Footer />}
//     </>
//   );
// };

// export default Orderlisthead;



// const Orderlisthead = () => {
  //   const dispatch = useDispatch();
  //   const { filteredData, selectedOrder, ordersCount, outForDeliveryCount, completeCount } = useSelector(state => state.orders);
  
  //   if (!filteredData) {
    //     return <div>Loading...</div>;
    //   }
    
    //   return (
      //     <>
      //       {!selectedOrder && <Navbar />}
      //       {selectedOrder ? (
//         <OrderDetails order={selectedOrder} onBack={() => dispatch(handleBack())} onComplete={() => dispatch(handleComplete(selectedOrder.id))} />
//       ) : (
  //         <>
  //           <div className="orderlistheader text-center justify-center py-40">
  //             <h1 className="text-4xl font-bold text-gray-800">Orders</h1>
  //             <p className="text-lg text-gray-800">Your Route, Your Earnings</p>
  //           </div>
  //           <Dashboard 
  //             ordersCount={ordersCount}
  //             outForDeliveryCount={outForDeliveryCount}
  //             completeCount={completeCount}
  //             onFilter={(status) => dispatch(handleFilter(status))}
  //           />
  //           <div className="container mx-auto p-6 tablecon overflow-x-auto">
  //             <h2 className="text-2xl font-semibold mb-6 mt-8 ml-6 text-gray-700">Today's Orders</h2>
  //             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center p-7">
  //               {filteredData.map((item) => (
    //                 <div key={item.id} className=" bg-[#F8F5F3] p-5 rounded-lg shadow-md mb-6">
    //                   <div className='bg-white rounded-md p-1'>
    //                   <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Order ID: {item.id}</h3>
//                   <div className="text-gray-800 mb-4 pl-3"><strong>Name:</strong> {item.name}</div>
//                   <div className="text-gray-800 mb-4 pl-3"><strong>Vehicle:</strong> {item.vehicle}</div>
//                   <div className="text-gray-800 mb-4 pl-3"><strong>Location:</strong> {item.from}</div>
//                   </div>
//                   <div className="flex space-x-2 mt-4 justify-center">
//                     <button onClick={() => dispatch(handleDetails(item))} className="btn-color hover:bg-orange-500 font-bold py-1 px-4 rounded border-none">
//                       Details
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//       {!selectedOrder && <Footer />}
//     </>
//   );
// };

// export default Orderlisthead;


import React, { useState } from 'react';
import './orderlisthead.css';
import Navbar from '../homecomponent/Navbar';
import Footer from '../homecomponent/Footer';
import Dashboard from './Dashbord';
import OrderDetails from './Orderdetails';
import { useSelector, useDispatch } from 'react-redux';
import { handleDetails, handleBack, handleAccept, handleComplete, handleFilter } from '../Orderlist_Reduxtoolkit/ordersSlice';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  return (
    <div className="flex justify-center mt-4">
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1} 
        className="px-4 py-2 bg-[#F8F5F3] text-gray-700 rounded mr-2"
      >
        Previous
      </button>
      {pageNumbers.map(page => (
        <button 
          key={page} 
          onClick={() => onPageChange(page)} 
          className={`px-4 py-2 ${currentPage === page ? 'bg-orange-500 text-white' : 'bg-[#F8F5F3] text-black'} rounded mx-1`}
        >
          {page}
        </button>
      ))}
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages} 
        className="px-4 py-2 bg-[#F8F5F3] text-gray-700 rounded ml-2"
      >
        Next
      </button>
    </div>
  );
};

const Orderlisthead = () => {
  const dispatch = useDispatch();
  const { filteredData, selectedOrder, ordersCount, outForDeliveryCount, completeCount } = useSelector(state => state.orders);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  if (!filteredData) {
    return <div>Loading...</div>;
  }

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentPageData = filteredData.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {!selectedOrder && <Navbar />}
      {selectedOrder ? (
        <OrderDetails order={selectedOrder} onBack={() => dispatch(handleBack())} onComplete={() => dispatch(handleComplete(selectedOrder.id))} />
      ) : (
        <>
          <div className="orderlistheader text-center justify-center py-40">
            <h1 className="text-4xl font-bold text-gray-800">Orders</h1>
            <p className="text-lg text-gray-800">Your Route, Your Earnings</p>
          </div>
          <Dashboard 
            ordersCount={ordersCount}
            outForDeliveryCount={outForDeliveryCount}
            completeCount={completeCount}
            onFilter={(status) => dispatch(handleFilter(status))}
          />
          <div className="container mx-auto p-6 tablecon overflow-x-auto">
            <h2 className="text-2xl font-semibold mb-6 mt-8 ml-6 text-gray-700">Today's Orders</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center p-7">
              {currentPageData.map((item) => (
                <div key={item.id} className=" bg-[#F8F5F3] p-5 rounded-lg shadow-md mb-6">
                  <div className='bg-white rounded-md p-1'>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Order ID: {item.id}</h3>
                  <div className="text-gray-800 mb-4 pl-3"><strong>Name:</strong> {item.name}</div>
                  <div className="text-gray-800 mb-4 pl-3"><strong>Vehicle:</strong> {item.vehicle}</div>
                  <div className="text-gray-800 mb-4 pl-3"><strong>Location:</strong> {item.from}</div>
                  </div>
                  <div className="flex space-x-2 mt-4 justify-center">
                    
                    <button onClick={() => dispatch(handleDetails(item))} className="btn-color hover:bg-orange-500 font-bold py-1 px-4 rounded border-none">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </>
      )}
      {!selectedOrder && <Footer />}
    </>
  );
};

export default Orderlisthead;

