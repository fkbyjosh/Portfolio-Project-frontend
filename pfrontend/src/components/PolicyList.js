import React, { useState, useEffect, useContext } from 'react';
import API from '../api/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const PolicyList = () => {
  const [policies, setPolicies] = useState([]);
  const [newPolicy, setNewPolicy] = useState({
    policy_num: '',
    policy_holder: '',
    policy_type: '',
    payment_mode: '',
    status: '',
    branch: '',
    premium: '',
  });
  const [error, setError] = useState(null);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Fetch policies on component mount
  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login if not authenticated
      return;
    }

    const fetchPolicies = async () => {
      try {
        const response = await API.get('/api/policies/');
        setPolicies(response.data);
      } catch (err) {
        setError('Failed to fetch policies');
        if (err.response?.status === 401) {
          logout(); // Log out if token is invalid
          navigate('/login');
        }
      }
    };

    fetchPolicies();
  }, [user, navigate, logout]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPolicy({ ...newPolicy, [name]: value });
  };

  // Create a new policy
  const handleCreatePolicy = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/api/policies/', newPolicy);
      setPolicies([...policies, response.data]);
      setNewPolicy({ policy_num: '', policy_holder: '', policy_type: '', payment_mode: '', status: '', branch: '', premium: '',});
    } catch (err) {
      setError('Failed to create policy');
    }
  };

  // Update an existing policy
  const handleUpdatePolicy = async (policyNum) => {
    try {
      const updatedPolicy = { ...newPolicy, policy_num: policyNum };
      const response = await API.put(`api/policies/${policyNum}/`, updatedPolicy);
      setPolicies(policies.map((policy) =>
        policy.policy_num === policyNum ? response.data : policy
      ));
    } catch (err) {
      setError('Failed to update policy');
    }
  };

  return (
    <div>
      <h2>Policies</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={logout}>Logout</button>

      {/* Create Policy Form */}
      <h3>Create New Policy</h3>
      <form onSubmit={handleCreatePolicy}>
        <div>
          <label>Policy Number:</label>
          <input
            type="text"
            name="policy_num"
            value={newPolicy.policy_num}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newPolicy.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={newPolicy.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Premium:</label>
          <input
            type="number"
            name="premium"
            value={newPolicy.premium}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Policy</button>
      </form>

      {/* Display Policies */}
      <h3>Policy List</h3>
      <ul>
        {policies.map((policy) => (
          <li key={policy.policy_num}>
            {policy.title} (Policy #{policy.policy_num}) - ${policy.premium}
            <button onClick={() => handleUpdatePolicy(policy.policy_num)}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PolicyList;