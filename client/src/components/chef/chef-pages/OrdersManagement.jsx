import React from 'react';

function OrderTableRow({ imgSrc, serviceName, estimate, budget, status }) {
  return (
    <tr>
      <td className="py-2 px-4 border-b border-b-gray-50">
        <div className="flex items-center">
          <img src={imgSrc} alt="" className="w-8 h-8 rounded object-cover block" />
          <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">{serviceName}</a>
        </div>
      </td>
      <td className="py-2 px-4 border-b border-b-gray-50">
        <span className="text-[13px] font-medium text-gray-400">{estimate}</span>
      </td>
      <td className="py-2 px-4 border-b border-b-gray-50">
        <span className="text-[13px] font-medium text-gray-400">{budget}</span>
      </td>
      <td className="py-2 px-4 border-b border-b-gray-50">
        <span className={`inline-block p-1 rounded ${status === "In progress" ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"} font-medium text-[12px] leading-none`}>{status}</span>
      </td>
    </tr>
  );
}

function OrdersManagement() {
  return (
    <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <div className="flex justify-between mb-4 items-start">
        <div className="font-medium">Manage orders</div>
        <div className="dropdown">
          <button type="button" className="dropdown-toggle text-gray-400 hover:text-gray-600"><i className="ri-more-fill"></i></button>
          <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
            <li>
              <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
            </li>
            <li>
              <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
            </li>
            <li>
              <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center mb-4 order-tab">
        <button type="button" data-tab="order" data-tab-page="active" className="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 rounded-tl-md rounded-bl-md hover:text-gray-600 active">Active</button>
        <button type="button" data-tab="order" data-tab-page="completed" className="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 hover:text-gray-600">Completed</button>
        <button type="button" data-tab="order" data-tab-page="canceled" className="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 rounded-tr-md rounded-br-md hover:text-gray-600">Canceled</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px]" data-tab-for="order" data-page="active">
          <thead>
            <tr>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">Service</th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Estimate</th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Budget</th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">Status</th>
            </tr>
          </thead>
          <tbody>
            <OrderTableRow imgSrc="https://placehold.co/32x32" serviceName="Create landing page" estimate="3 days" budget="$56" status="In progress" />
          </tbody>
        </table>
        <table className="w-full min-w-[540px] hidden" data-tab-for="order" data-page="completed">
          <thead>
            <tr>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">Service</th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Estimate</th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Budget</th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">Status</th>
            </tr>
          </thead>
          <tbody>
            <OrderTableRow imgSrc="https://placehold.co/32x32" serviceName="Create landing page" estimate="3 days" budget="$56" status="Completed" />
          </tbody>
        </table>
        <table className="w-full min-w-[540px] hidden" data-tab-for="order" data-page="canceled">
          <thead>
            <tr>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">Service</th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Estimate</th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Budget</th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">Status</th>
            </tr>
          </thead>
          <tbody>
            <OrderTableRow imgSrc="https://placehold.co/32x32" serviceName="Create landing page" estimate="3 days" budget="$56" status="Canceled" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersManagement;
