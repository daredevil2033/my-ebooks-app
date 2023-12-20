import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './BookManager.css';

function BookManager() {
    const handleCreateBook = (event) => {
        event.preventDefault();
        const {title, author} = event.target.elements;
        createBook(title.value, author.value);
    };
    const createBook = (title, author) => {
        fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, author}),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    const readBooks = () => {
        fetch('http://localhost:3000/books', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Books:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    const handleUpdateBook = (event) => {
        event.preventDefault();
        const {id, title, author} = event.target.elements;
        updateBook(id.value, title.value, author.value);
    };
    const updateBook = (id, title, author) => {
        fetch(`http://localhost:3000/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, author}),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    const handleDeleteBook = (event) => {
        event.preventDefault();
        const {id} = event.target.elements;
        deleteBook(id.value);
    };
    const deleteBook = (id) => {
        fetch(`http://localhost:3000/books/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <Box className="book-manager">
            <Box className="book-manager-box">
                <Button variant="contained" color="primary" type="submit" form="createBookForm">Create Book</Button>
                <form id="createBookForm" onSubmit={handleCreateBook}>
                    <Box className="empty-field"></Box>
                    <TextField name="title" placeholder="Title" variant="outlined" size="small"/>
                    <TextField name="author" placeholder="Author" variant="outlined" size="small"/>
                </form>
            </Box>
            <Box className="book-manager-box">
                <Button variant="contained" color="primary" onClick={readBooks}>Read Books</Button>
            </Box>
            <Box className="book-manager-box">
                <Button variant="contained" color="primary" type="submit" form="updateBookForm">Update Book</Button>
                <form id="updateBookForm" onSubmit={handleUpdateBook}>
                    <TextField name="id" placeholder="ID" variant="outlined" size="small"/>
                    <TextField name="title" placeholder="Title" variant="outlined" size="small"/>
                    <TextField name="author" placeholder="Author" variant="outlined" size="small"/>
                </form>
            </Box>
            <Box className="book-manager-box">
                <Button variant="contained" color="primary" type="submit" form="deleteBookForm">Delete Book</Button>
                <form id="deleteBookForm" onSubmit={handleDeleteBook}>
                    <TextField name="id" placeholder="ID" variant="outlined" size="small"/>
                </form>
            </Box>
        </Box>
    );
}

export default BookManager;