"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = require("path");
const movies_metadata_json_1 = __importDefault(require("./movies_metadata.json"));
const typedMoviesData = movies_metadata_json_1.default;
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static((0, path_1.join)(__dirname, 'public')));
app.get('/api/movies', (req, res) => {
    res.json(typedMoviesData);
});
app.get('/api/movies/:id', (req, res) => {
    const movie = typedMoviesData.find(m => m.id === parseInt(req.params.id));
    if (movie) {
        res.json(movie);
    }
    else {
        res.status(404).json({ error: 'Movie not found' });
    }
});
app.get('*', (req, res) => {
    res.sendFile((0, path_1.join)(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
