CREATE TABLE users (
  id PRIMARY KEY UNIQUE,
  first_name VARCHAR(20),
  last_name VARCHAR(50),
  nickname VARCHAR(20),
  email VARCHAR(100) UNIQUE,
  password_hash TEXT,
  expirience_level VARCHAR(15) NOT NULL DEFAULT 'beginner',
  cycling_modalities VARCHAR(10[])
  motivation VARCHAR(20[])
  role VARCHAR(10[]) NOT NULL DEFAULT 'user'
)