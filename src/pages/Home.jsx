import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';

function Home() {
  return (
    <div className="mt-5 px-4" style={{ width: '100%', maxWidth: '100%' }}>
      <div className="page-header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="text-muted">Manage your tasks efficiently</p>
        </div>
        <Link to="/add-task">
          <Button className="btn-primary-custom" size="lg">
            + New Task
          </Button>
        </Link>
      </div>
      
      <Row className="g-4 mb-5">
        <Col xs={12} md={4}>
          <div className="task-column">
            <div className="column-header" style={{ color: '#667eea' }}>
              📋 To Do
            </div>
            <div className="empty-state">
              <div className="empty-state-icon">📝</div>
              <p>No tasks yet</p>
              <small>Create your first task to get started</small>
            </div>
          </div>
        </Col>
        
        <Col xs={12} md={4}>
          <div className="task-column">
            <div className="column-header" style={{ color: '#f59e0b' }}>
              ⚡ In Progress
            </div>
            <div className="empty-state">
              <div className="empty-state-icon">🔄</div>
              <p>Nothing in progress</p>
              <small>Move tasks here when working on them</small>
            </div>
          </div>
        </Col>
        
        <Col xs={12} md={4}>
          <div className="task-column">
            <div className="column-header" style={{ color: '#10b981' }}>
              ✅ Completed
            </div>
            <div className="empty-state">
              <div className="empty-state-icon">🎉</div>
              <p>No completed tasks</p>
              <small>Finished tasks will appear here</small>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="g-4">
        <Col xs={6} md={3}>
          <StatCard number="0" label="Total Tasks" />
        </Col>
        <Col xs={6} md={3}>
          <StatCard 
            number="0" 
            label="In Progress" 
            color="linear-gradient(135deg, #f59e0b 0%, #f97316 100%)"
          />
        </Col>
        <Col xs={6} md={3}>
          <StatCard 
            number="0" 
            label="Completed" 
            color="linear-gradient(135deg, #10b981 0%, #059669 100%)"
          />
        </Col>
        <Col xs={6} md={3}>
          <StatCard number="0%" label="Success Rate" />
        </Col>
      </Row>
    </div>
  );
}

export default Home;