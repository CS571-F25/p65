import { Card } from 'react-bootstrap';

function StatCard({ number, label, color }) {
  return (
    <Card className="stats-card">
      <Card.Body>
        <div 
          className="stats-number" 
          style={{ 
            background: color || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {number}
        </div>
        <p className="text-muted mb-0">{label}</p>
      </Card.Body>
    </Card>
  );
}

export default StatCard;