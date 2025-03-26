import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import StatCard from './StatCard';
import DonutChart from './DonutChart';
import BarChart from './BarChart';
import PolicyTable from './PolicyTable';
import { getDashboardStats, getPolicies } from '../api';

function Dashboard() {
  const [stats, setStats] = useState({
    totalPolicies: { count: 0, change: 0 },
    approvedPolicies: { count: 0, change: 0 },
    rejectedPolicies: { count: 0, change: 0 },
    pendingPolicies: { count: 0, change: 0 },
    statusDistribution: { approved: 0, rejected: 0, pending: 0 },
    monthlyTrends: [],
  });
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    getDashboardStats()
      .then(response => setStats(response.data))
      .catch(error => console.error(error));

    getPolicies()
      .then(response => {
        const recentPolicies = response.data.slice(0, 5).map(policy => ({
          ...policy,
          created_at: new Date().toISOString(), // Mock date
        }));
        setPolicies(recentPolicies);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>Dashboard</h2>
          <p className="text-muted">Overview of all policy activities and trends</p>
        </div>
        <Form.Control
          type="text"
          placeholder="Search policies, clients..."
          className="search-bar"
        />
      </div>
      <Row className="mb-4">
        <Col md={3}>
          <StatCard
            title="Total Policies"
            count={stats.totalPolicies.count}
            change={stats.totalPolicies.change}
            icon="bi-file-earmark-text-fill"
            color="blue"
          />
        </Col>
        <Col md={3}>
          <StatCard
            title="Approved Policies"
            count={stats.approvedPolicies.count}
            change={stats.approvedPolicies.change}
            icon="bi-check-circle-fill"
            color="green"
          />
        </Col>
        <Col md={3}>
          <StatCard
            title="Rejected Policies"
            count={stats.rejectedPolicies.count}
            change={stats.rejectedPolicies.change}
            icon="bi-x-circle-fill"
            color="red"
          />
        </Col>
        <Col md={3}>
          <StatCard
            title="Pending Review"
            count={stats.pendingPolicies.count}
            change={stats.pendingPolicies.change}
            icon="bi-clock-fill"
            color="yellow"
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <DonutChart data={stats.statusDistribution} />
        </Col>
        <Col md={6}>
          <BarChart data={stats.monthlyTrends} />
        </Col>
      </Row>
      <PolicyTable policies={policies} />
    </div>
  );
}

export default Dashboard;
