const connection = require('./connection');

const getAll = async () => {
    const [books] = await connection.execute("SELECT * FROM model_example.books;")

    return books;
}

const getByAuthorId = async (author_id) => {
    const [books] = await connection.execute("SELECT * FROM model_example.books WHERE author_id=?;", [author_id])
    return books.map(({ id, title, author_id }) => ({
        id,
        title,
        authorId: author_id
        }))        
}


module.exports = {
    getAll,
    getByAuthorId
};
