import React from 'react';
import { Card } from 'react-bootstrap';

function StatCard({ title, count, change, icon, color }) {
  return (
    <Card className="stat-card">
      <Card.Body className="d-flex align-items-center">
        <div className={`icon-circle ${color} mr-3`}>
          <i className={`bi ${icon}`}></i>
        </div>
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <span className="count">{count}</span>
            <span className="change"> {change}%</span>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default StatCard;
