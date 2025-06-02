require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 라우트 설정
app.use('/api', authRoutes);

// MongoDB 연결
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB에 연결되었습니다.'))
  .catch(err => console.error('MongoDB 연결 에러:', err));

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
}); 