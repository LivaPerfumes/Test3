import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function OrderConfirmation() {
  const location = useLocation();
  const { orderId, estimatedDelivery } = location.state || {};

  if (!orderId) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pt-20 pb-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your order. We'll send you a confirmation email with your order details.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="space-y-4">
              <div>
                <h2 className="text-sm font-medium text-gray-500">Order Number</h2>
                <p className="text-lg font-medium text-gray-900">{orderId}</p>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500">Estimated Delivery</h2>
                <p className="text-lg font-medium text-gray-900">{estimatedDelivery}</p>
              </div>
            </div>
          </div>

          <Link
            to="/products"
            className="inline-block bg-purple-600 text-white py-3 px-8 rounded-md hover:bg-purple-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}