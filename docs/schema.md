# Schema

## Tasks

| Column Name | Datatype | Details       |
|-------------|----------|---------------|
| id          | integer  | primary key   |
| owner_id    | integer  | null: false   |
| title       | string   | null: false   |
| due_date    | date     |               |
| parent_id   | integer  | foreign key   |
| completed   | boolean  | default: false|
