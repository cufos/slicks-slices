import React, { useState } from 'react';

// create a context order
const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  // we need to stic state in here
  const [order, setOrder] = useState([]);

  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
