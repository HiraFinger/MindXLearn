## What is MongoDB?
Open source document, NoSQL database
- NoSQL?
    - No linking (foreign key)
    - Faster Operations (CRUD)
- Document?
    | SQL | MongoDB |
    |-----|---------|
    | table | Collection|
    | table | document |
    | column | field |
    - Flexibility fields
    - Support multiple values fields

## Why MongoDB?
- Free
- Document based
- Fast
- Easier to scale
- High availability
- Syntax

## Basic Command
- `show dbs`: Show all database in mongodb
- `use <db_name>`: Create and switch to database
- `db.createCollection(<db_name>)`: create collection
- `db.collection.insertOne(<data>)`: insert one document
- `db.collection.insertMany()`: insert mutiple document
- `db.collection.find()`: query document

## Filter condition:
- `<key>:<value>`: equal
- `$in:<array>`: value inside the list
- `$ls/$lte/$gt/$gte:<value>`: less/less or equal/greater/greater or equal than value
- `$or: <condition1>, <condition2>,...]`: or (matched one of these conditions)
- `field.nestedField: value`: query nested document
- `$all:<array>`:value that contain array, without order
- `field.<index>.field: value`: element at index match condition


