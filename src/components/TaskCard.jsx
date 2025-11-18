import { Card, Badge, Button } from 'react-bootstrap';

function TaskCard({ title, description, dueDate, status }) {
  const getStatusBadge = () => {
    switch(status) {
      case 'todo':
        return <Badge bg="primary">To Do</Badge>;
      case 'inprogress':
        return <Badge bg="warning">In Progress</Badge>;
      case 'completed':
        return <Badge bg="success">Completed</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="mb-0">{title}</h5>
          {getStatusBadge()}
        </div>
        
        {description && (
          <p className="text-muted mb-2">{description}</p>
        )}
        
        {dueDate && (
          <small className="text-muted">
            📅 Due: {new Date(dueDate).toLocaleDateString()}
          </small>
        )}
        
        <div className="mt-3">
          <Button variant="outline-primary" size="sm" className="me-2">
            Edit
          </Button>
          <Button variant="outline-danger" size="sm">
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;