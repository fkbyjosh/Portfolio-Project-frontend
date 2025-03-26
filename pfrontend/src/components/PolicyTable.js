import React from 'react';
import { Table } from 'react-bootstrap';

function PolicyTable({ policies }) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Recent Policies</h5>
        <a href="/policies" className="text-primary">View All</a>
      </div>
      <Table borderless className="policy-table">
        <thead>
          <tr>
            <th>Policy Num</th>
            <th>Policy Holder</th>
            <th>Policy Type</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {policies.map(policy => (
            <tr key={policy.policy_num}>
              <td>{policy.policy_num}</td>
              <td>{policy.policy_holder}</td>
              <td>{policy.policy_type}</td>
              <td>{new Date(policy.created_at).toLocaleDateString()}</td>
              <td>
                <span className={`status ${policy.status.toLowerCase()}`}>
                  {policy.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default PolicyTable;
