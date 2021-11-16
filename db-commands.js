// CREATE AND USE MONGO_EXERCISES DB
use mongo_exercises

// INSERT DOCUMENTS INTO MOVIES COLLECTION

db.movies.insertOne({"title": "Star Wars", "writer": "George Lucas", "year": 1977, "actors": ["Mark Hamill", "Harrison Ford", "Carrie Fischer", "Peter Cushing", "James Earl Jones"]})
db.movies.insertOne({"title": "Raiders of the Lost Ark", "writer": "George Lucas", "year": 1981, "actors": ["Harrison Ford"]})
db.movies.insertOne({"title": "Fight Club", "writer": "Chuck Palahniuk", "year": 1999, "actors": ["Brad Pitt", "Edward Norton"]})
db.movies.insertOne({"title": "Pulp Fiction", "writer": "Quentin Tarantino", "year": 1994, "actors": ["John Travolta", "Uma Thurman"]})
db.movies.insertOne({"title": "Inglorious Basterds", "writer": "Quentin Tarantino", "year": 2009, "actors": ["Brad Pitt", "Diane Kruger", "Eli Roth"]})
db.movies.insertOne({"title": "The Hobbit: An Unexpected Journey", "writer": "J.R.R. Tolkien", "year": 2012, "franchise": "The Hobbit"})
db.movies.insertOne({"title": "The Hobbit: The Desolation of Smaug", "writer": "J.R.R. Tolkien", "year": 2013, "franchise": "The Hobbit"})
db.movies.insertOne({"title": "The Hobbit: The Battle of the Five Armies", "writer": "J.R.R. Tolkien", "year": 2012, "franchise": "The Hobbit", "synopsis": "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."})
db.movies.insertOne({"title": "Pee Wee Herman's Big Adventure", "writer": "Phil Hartman", "year": 1985})
db.movies.insertOne({"title": "Avatar"})


// QUERY / FIND DOCUMENTS
// 1. GET ALL DOCUMENTS
db.movies.find({})
// 2. GET ALL DOCUMENTS W QUENTIN TARANTINO AS WRITER
db.movies.find({"writer": "Quentin Tarantino"})
// 3. GET ALL DOCUMENTS WHERE ACTORS INCLUDE BRAD PITT
db.movies.find({"actors": "Brad Pitt"})
// 4. GET ALL DOCUMENTS WITHIN THE HOBBIT FRANCHISE
db.movies.find({"franchise": "The Hobbit"})
// 5. GET ALL MOVIES RELEASED IN THE 90S
db.movies.find({"year": {$gte: 1990, $lte: 1999}})
// 6. GET ALL MOVIES RELEASED BEFORE THE YEAR 2000 OR AFTER 2010
db.movies.find({"year": {$lt: 2000, $gt: 2010}})


// UPDATE DOCUMENTS
// 1. ADD A SYNOPSIS TO "THE HOBBIT: AN UNEXPECTED JOURNEY"
db.movies.updateOne({"title": "The Hobbit: An Unexpected Journey"},{$set: {"synopsis": "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})
// 2. ADD A SYNOPSIS TO "THE HOBBIT: THE DESOLATION OF SMAUG"
db.movies.updateOne({"title": "The Hobbit: The Desolation of Smaug"},{$set: {"synopsis": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})
// 3. ADD SAMUEL L. JACKSON TO LIST OF ACTORS ON PULP FICTION
db.movies.updateOne({"title": "Pulp Fiction"},{$push:{"actors": "Samuel L. Jackson"}})

// TEXT SEARCH
// 1. FIND ALL MOVIES THAT HAVE A SYNOPSIS THAT CONTAINS THE WORD "BILBO"
db.movies.find({"synopsis": /.*bilbo*./i})
// 2. FIND ALL MOVIES THAT HAVE A SYNOPSIS THAT CONTAINS THE WORD "GANDALF"
db.movies.find({"synopsis": /.*gandalf*./i})
// 3. FIND ALL MOVIES THAT HAVE A SYNOPSIS THAT CONTAINS THE WORD "BILBO" AND NOT THE WORD "GANDALF"
db.movies.find({$or: [{"synopsis": /.*bilbo*./i},{"synopsis": /.*gandalf*./i}]})
// 4. FIND ALL MOVIES THAT HAVE A SYNOPSIS THAT CONTAINS THE WORD "DWARVES" OR "HOBBIT"
db.movies.find({$or: [{"synopsis": /.*dwarves*./i},{"synopsis": /.*hobbit*./i}]})
// 5. FIND ALL MOVIES THAT HAVE A SYNOPSIS THAT CONTAINS THE WORD "GOLD" AND "DRAGON"
db.movies.find({$and: [{"synopsis": /.*gold*./i},{"synopsis": /.*dragon*./i}]})

// DELETE DOCUMENTS
// 1. DELETE THE MOVIE PEE WEE HERMAN'S BIG ADVENTURE
db.movies.deleteOne({"title": "Pee Wee Herman's Big Adventure"})
// 2. DELETE THE MOVIE AVATAR
db.movies.deleteOne({"title": "Avatar"})


// RELATIONSHIPS
db.users.insertOne({"username": "SallySmith", "first_name": "Sally", "last_name": "Smith"})
db.users.insertOne({"username": "JimmyHagen", "full_name": {"first": "Jimmy", "last": "Hagen"}})

db.posts.insertOne({"username": "SallySmith", "title": "Passes out at party", "body": "Wakes up early and cleans house"})
db.posts.insertOne({"username": "SallySmith", "title": "Buys a House", "body": "Living in a new neighborhood now"})
db.posts.insertOne({"username": "SallySmith", "title": "Reports a bug in your code", "body": "Sends you a Pull Request"})
db.posts.insertOne({"username": "JimmyHagen", "title": "Borrows something", "body": "Returns it when he is done"})
db.posts.insertOne({"username": "JimmyHagen", "title": "Borrows everything", "body": "The end"})
db.posts.insertOne({"username": "JimmyHagen", "title": "Forks your repo on github", "body": "Sets to private"})

db.comments.insertOne({"username": "SallySmith", "comment": "Hope you got a good deal!", "post" : "6193c4f63712acb25deb041d"})
db.comments.insertOne({"username": "SallySmith", "comment": "What's mine is yours!", "post" : "6193c4fb3712acb25deb041e"})
db.comments.insertOne({"username": "SallySmith", "comment": "Don't violate the licensing agreement!", "post" : "6193c4ff3712acb25deb041f"})
db.comments.insertOne({"username": "JimmyHagen", "comment": "It still isn't clean", "post" : "6193c4e13712acb25deb041a"})
db.comments.insertOne({"username": "JimmyHagen", "comment": "Denied your PR cause I found a hack", "post" : "6193c4f03712acb25deb041c"})

// QUERYING RELATED COLLECTIONS
// 1. FIND ALL USERS
db.users.find({})
// 2. FIND ALL POSTS
db.posts.find({})
// 3. FIND ALL POSTS AUTHORED BY SALLYSMITH
db.posts.find({"username": "SallySmith"})
// 4. FIND ALL POSTS AUTHORED BY JIMMYHAGEN
db.posts.find({"username": "JimmyHagen"})
// 5. FIND ALL COMMENTS
db.comments.find({})
// 6. FIND ALL COMMENTS AUTHORED BY SALLYSMITH
db.comments.find({"username": "SallySmith"})
// 7. FIND ALL COMMENTS AUTHORED BY JIMMY HAGEN
db.comments.find({"username": "JimmyHagen"})
// 8. FIND ALL COMMENTS BELONGING TO THE POST "REPORTS A BUG IN YOUR CODE"
db.comments.find({"post": "6193c4f03712acb25deb041c"})


