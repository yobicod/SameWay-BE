-- Delete existing rows
DELETE FROM enum_genders;
DELETE FROM enum_problems;
DELETE FROM enum_car_types;

-- Insert new values
INSERT INTO enum_genders (value, description)
VALUES 
  ('ชาย', ''),
  ('หญิง', ''),
  ('อื่นๆ', '');

INSERT INTO enum_problems (value, description)
VALUES 
  ('อุบัติเหตุทางรถยนต์', ''),
  ('การละเมิดกฎจราจร', ''),
  ('การกระทำที่ผิดกฎหมาย', ''),
  ('การละเมิดต่างๆ', ''),
  ('การขนส่งของผิดกฎหมาย', '');
  
INSERT INTO enum_car_types (value, description)
VALUES 
  ('รถยนต์', ''),
  ('รถจักรยานยนต์', '');
