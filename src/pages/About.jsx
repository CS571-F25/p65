import { Container, Card, Badge } from 'react-bootstrap';

function About() {
  return (
    <Container className="mt-4">
      <Card className="shadow">
        <Card.Body>
          <h1 className="mb-4">ℹ️ About TaskFlow</h1>
          
          <p className="lead">
            TaskFlow is a modern web-based task management application built with React.
          </p>
          
          <hr />
          
          <h4 className="mt-4">✨ Features</h4>
          <ul className="list-unstyled mt-3">
            <li className="mb-2">📝 Create, edit, and delete tasks</li>
            <li className="mb-2">📊 Organize tasks by status (To Do, In Progress, Completed)</li>
            <li className="mb-2">📅 Set due dates for better planning</li>
            <li className="mb-2">📈 Track your progress with statistics</li>
            <li className="mb-2">💾 Data persistence across sessions</li>
          </ul>

          <hr />

          <h4 className="mt-4">🛠️ Built With</h4>
          <div className="mt-3">
            <Badge bg="primary" className="me-2">React</Badge>
            <Badge bg="secondary" className="me-2">Vite</Badge>
            <Badge bg="info" className="me-2">React Bootstrap</Badge>
            <Badge bg="success" className="me-2">React Router</Badge>
          </div>

          <hr />

          <p className="text-muted mt-4">
            <small>Created as part of CS571 - Building User Interfaces</small>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;