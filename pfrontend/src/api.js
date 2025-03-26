import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getPolicies = () => axios.get(`${API_URL}/policies/`);
export const getDashboardStats = () => {
  // Mock API call for dashboard stats
  return Promise.resolve({
    data: {
      totalPolicies: { count: 50, change: 12 },
      approvedPolicies: { count: 16, change: 8 },
      rejectedPolicies: { count: 14, change: 3 },
      pendingPolicies: { count: 20, change: 5 },
      statusDistribution: { approved: 32, rejected: 28, pending: 40 },
      monthlyTrends: [
        { month: 'Oct', approved: 0.5, rejected: 0.3, pending: 0.2 },
        { month: 'Nov', approved: 0.8, rejected: 0.4, pending: 0.3 },
        { month: 'Dec', approved: 1.5, rejected: 1.2, pending: 1.0 },
        { month: 'Jan', approved: 1.8, rejected: 1.5, pending: 1.2 },
        { month: 'Feb', approved: 1.2, rejected: 1.0, pending: 1.5 },
        { month: 'Mar', approved: 1.5, rejected: 0.8, pending: 2.0 },
      ],
    },
  });
};
