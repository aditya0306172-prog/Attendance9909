const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let participants = [];

app.post('/register', (req, res) => {
  const { name, email, id } = req.body;
  if (!name || !email || !id) {
    return res.json({ success: false, error: 'All fields required' });
  }
  if (participants.find(p => p.id === id)) {
    return res.json({ success: false, error: 'ID already registered' });
  }
  participants.push({ name, email, id, attended: false, timestamp: null });
  res.json({ success: true });
});

app.post('/attendance', (req, res) => {
  const { id } = req.body;
  const participant = participants.find(p => p.id === id);
  if (!participant) {
    return res.json({ success: false, error: 'ID not found' });
  }
  if (participant.attended) {
    return res.json({ success: false, error: 'Already marked present' });
  }
  participant.attended = true;
  participant.timestamp = new Date().toLocaleString();
  res.json({ success: true });
});

app.get('/participants', (req, res) => {
  res.json(participants);
});

app.get('/export', (req, res) => {
  let csv = 'Name,Email,ID,Status,Timestamp\n';
  participants.forEach(p => {
    csv += `${p.name},${p.email},${p.id},${p.attended ? 'Present' : 'Absent'},${p.timestamp || '-'}\n`;
  });
  res.header('Content-Type', 'text/csv');
  res.attachment('attendance.csv');
  res.send(csv);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
