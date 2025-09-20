import { createSlice } from '@reduxjs/toolkit';

const initialData = [
  { id: 1, name: 'John Doe', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  { id: 2, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  { id: 3, name: 'Anushka', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  { id: 4, name: 'Rishika', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  { id: 5, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  { id: 6, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  { id: 7, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  { id: 8, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  { id: 9, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  // { id: 67854, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  // { id: 59876, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' } ,
  // { id: 19, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  // { id: 6785, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  // { id: 93, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  // { id: 6784, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  // { id: 99, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  // { id: 6754, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  // { id: 29, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  // { id: 7854, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  // { id: 49, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
  // { id: 6784, name: 'Jane Smith', orderdate: '12 May 2024', deliverydate: '12 May 2024', subtotal: '$1.18', income: '$0.12', from: 'New York', to: 'Los Angeles', status: 'Pending', vehicle: 'Motorcycle Rider', payment: 'Cash On Delivery', phoneNumber: '8795457689', parserType: 'Small' },
];


// const initialState = {
//   data: initialData,
//   filteredData: initialData.filter(order => order.status !== 'Delivered' && order.status !== 'Out for Delivery'),
//   ordersCount: initialData.filter(order => order.status !== 'Delivered' && order.status !== 'Out for Delivery').length,
//   outForDeliveryCount: initialData.filter(order => order.status === 'Out for Delivery').length,
//   completeCount: initialData.filter(order => order.status === 'Delivered').length,
//   selectedOrder: null,
//   error: null,
// };

// const ordersSlice = createSlice({
//   name: 'orders',
//   initialState,
//   reducers: {
//     handleAccept: (state, action) => {
//       const updatedData = state.data.map(item => item.id === action.payload ? { ...item, status: 'Out for Delivery' } : item);
//       state.data = updatedData;
//       state.filteredData = updatedData.filter(order => order.status !== 'Delivered' && order.status !== 'Out for Delivery');
//       state.ordersCount = state.filteredData.length;
//       state.outForDeliveryCount = updatedData.filter(order => order.status === 'Out for Delivery').length;
//     },
//     handleComplete: (state, action) => {
//       const updatedData = state.data.map(item => item.id === action.payload ? { ...item, status: 'Delivered' } : item);
//       state.data = updatedData;
//       state.filteredData = updatedData.filter(order => order.status !== 'Delivered' && order.status !== 'Out for Delivery');
//       state.ordersCount = state.filteredData.length;
//       state.outForDeliveryCount = updatedData.filter(order => order.status === 'Out for Delivery').length;
//       state.completeCount = updatedData.filter(order => order.status === 'Delivered').length;
//     },
//     handleReject: (state, action) => {
//       const updatedData = state.data.map(item => item.id === action.payload ? { ...item, status: 'Rejected' } : item);
//       state.data = updatedData;
//       state.filteredData = updatedData.filter(order => order.status !== 'Delivered' && order.status !== 'Out for Delivery');
//       state.ordersCount = state.filteredData.length;
//       state.outForDeliveryCount = updatedData.filter(order => order.status === 'Out for Delivery').length;
//     },
//     handleDetails: (state, action) => {
//       state.selectedOrder = action.payload;
//     },
//     handleBack: (state) => {
//       state.selectedOrder = null;
//     },
//     handleFilter: (state, action) => {
//       if (action.payload === 'all') {
//         state.filteredData = state.data.filter(order => order.status !== 'Delivered' && order.status !== 'Out for Delivery');
//       } else if (action.payload === 'Pending') {
//         state.filteredData = state.data.filter(order => order.status === 'Out for Delivery');
//       } else {
//         state.filteredData = state.data.filter(order => order.status === action.payload);
//       }
//     },
//   },
// });

// export const { handleAccept, handleComplete, handleReject, handleDetails, handleBack, handleFilter } = ordersSlice.actions;
// export default ordersSlice.reducer;


const initialState = {
  data: initialData,
  filteredData: initialData.filter(order => order.status !== 'Delivered' && order.status !== 'Out for Delivery'),
  selectedOrder: null,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    handleAccept: (state, action) => {
      const updatedData = state.data.map(item => item.id === action.payload ? { ...item, status: 'Out for Delivery' } : item);
      state.data = updatedData;
      state.filteredData = updatedData.filter(order => order.status !== 'Delivered' && order.status !== 'Out for Delivery');
    },
    handleComplete: (state, action) => {
      const updatedData = state.data.map(item => item.id === action.payload ? { ...item, status: 'Delivered' } : item);
      state.data = updatedData;
      state.filteredData = updatedData.filter(order => order.status !== 'Delivered' && order.status !== 'Out for Delivery');
    },
    handleReject: (state, action) => {
      const updatedData = state.data.map(item => item.id === action.payload ? { ...item, status: 'Rejected' } : item);
      state.data = updatedData;
      state.filteredData = updatedData.filter(order => order.status !== 'Delivered' && order.status !== 'Out for Delivery');
    },
    handleDetails: (state, action) => {
      state.selectedOrder = action.payload;
    },
    handleBack: (state) => {
      state.selectedOrder = null;
    },
    handleFilter: (state, action) => {
      if (action.payload === 'all') {
        state.filteredData = state.data.filter(order => order.status !== 'Delivered' && order.status !== 'Out for Delivery');
      } else if (action.payload === 'Pending') {
        state.filteredData = state.data.filter(order => order.status === 'Out for Delivery');
      } else {
        state.filteredData = state.data.filter(order => order.status === action.payload);
      }
    },
  },
});

export const { handleAccept, handleComplete, handleReject, handleDetails, handleBack, handleFilter } = ordersSlice.actions;
export default ordersSlice.reducer;
