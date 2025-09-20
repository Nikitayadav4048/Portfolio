import React from 'react';
import './orderlisthead.css';
import Navbar from '../homecomponent/Navbar';
import Footer from '../homecomponent/Footer';
import Dashbord from './Dashbord';
import OrderDetails from './Orderdetails';
import { useOrderContext } from './OrderContext';

const Orderlisthead = () => {
  const { filteredData, selectedOrder, ordersCount, outForDeliveryCount, completeCount, handleDetails, handleBack, handleAccept, handleComplete, handleFilter } = useOrderContext();

  if (!filteredData) {
    return <div>Loading...</div>;
  }

  console.log('Orders Count:', ordersCount); // Debugging log

  return (
    <>
      {!selectedOrder && <Navbar />}
      {selectedOrder ? (
        <OrderDetails order={selectedOrder} onBack={handleBack} onComplete={handleComplete} />
      ) : (
        <>
          <div className="orderlistheader text-center justify-center py-40">
            <h1 className="">Orders</h1>
            <p>Your Route, Your Earnings</p>
          </div>
          <Dashbord 
            ordersCount={ordersCount}
            outForDeliveryCount={outForDeliveryCount}
            completeCount={completeCount}
            onFilter={handleFilter}
          />
          <div className="container mx-auto p-6 tablecon">
            <h2 className="text-xl font-semibold mb-6 ml-6">Today's Orders</h2>
            <table className="min-w-full bg-white text-center justify-center">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b bg-orange-300">Order ID</th>
                  <th className="py-2 px-4 border-b bg-orange-300">Name</th>
                  <th className="py-2 px-4 border-b bg-orange-300">Order Date</th>
                  <th className="py-2 px-4 border-b bg-orange-300">Delivery Date</th>
                  <th className="py-2 px-4 border-b bg-orange-300">SubTotal</th>
                  <th className="py-2 px-4 border-b bg-orange-300">Income</th>
                  <th className="py-2 px-4 border-b bg-orange-300" colSpan="2">Location</th>
                  <th className="py-2 px-4 border-b bg-orange-300">Vehicle</th>
                  <th className="py-2 px-4 border-b bg-orange-300 status-column">Status</th>
                  <th className="py-2 px-4 border-b bg-orange-300" colSpan="2">Action</th>
                </tr>
                <tr>
                  <th className="py-2 px-4 border"></th>
                  <th className="py-2 px-4 border"></th>
                  <th className="py-2 px-4 border"></th>
                  <th className="py-2 px-4 border"></th>
                  <th className="py-2 px-4 border"></th>
                  <th className="py-2 px-4 border"></th>
                  <th className="py-2 px-4 border">From</th>
                  <th className="py-2 px-4 border">To</th>
                  <th className="py-2 px-4 border"></th>
                  <th className="py-2 px-4 border status-column"></th>
                  <th className="py-2 px-4 border"></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 px-4">{item.id}</td>
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">{item.orderdate}</td>
                    <td className="py-2 px-4">{item.deliverydate}</td>
                    <td className="py-2 px-4">{item.subtotal}</td>
                    <td className="py-2 px-4">{item.income}</td>
                    <td className="py-2 px-4 border">{item.from}</td>
                    <td className="py-2 px-4 border">{item.to}</td>
                    <td className="py-2 px-4">{item.vehicle}</td>
                    <td className="py-2 px-4 status-column">{item.status}</td>
                    <td className="py-2 px-4 border">
                      {item.status === 'Delivered' ? (
                        <button className="btn-color font-bold py-1 px-2 rounded border-none" disabled>
                          Completed
                        </button>
                      ) : item.status === 'Out for Delivery' ? (
                        <button onClick={() => handleDetails(item)} className="btn-color hover:bg-orange-500 font-bold py-1 px-2 rounded border-none">
                          Details
                        </button>
                      ) : (
                        <>
                          <button onClick={() => handleAccept(item.id)} className="btn-color hover:bg-orange-500 font-bold py-1 px-2 rounded border-none">
                            Accept
                          </button>
                          <button className="bg-black hover:bg-black text-white font-bold py-1 px-2 rounded ml-2 border-none">Reject</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      {!selectedOrder && <Footer />}
    </>
  );
};

export default Orderlisthead;
