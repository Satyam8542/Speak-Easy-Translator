CREATE DATABASE translator_db;
USE translator_db;
CREATE TABLE translations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  original_text TEXT,
  translated_text TEXT,
  source_lang VARCHAR(10),
  target_lang VARCHAR(10),
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);