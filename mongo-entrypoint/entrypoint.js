var db = connect("mongodb://user:passs@localhost:27017/admin");

db = db.getSiblingDB('new_db');

db.createUser(
    {
        user: "user",
        pwd: "pass",
        roles: [ { role: "readWrite", db: "new_user"} ],
        passwordDigestor: "server",
    }
)
