import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
//CREATE

export default function NewToListenToForm({onSubmit}) {
    const [songValue, setSongValue] = useState("");
    const [artistValue, setArtistValue] = useState("");
    
    const handleSongChange = (event) => setSongValue(event.target.value);
    const handleArtistChange = (event) => setArtistValue(event.target.value);
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        const toListenToData = {
            song: songValue,
            artist: artistValue
            
        }

        onSubmit(toListenToData)

        setSongValue("");
        setArtistValue("");

        
    }
    
    return (
        <form>
            <input type="text" placeholder="Song" value={songValue} onChange={handleSongChange}/><br></br>
            <input type="text" placeholder="Artist" value={artistValue} onChange={handleArtistChange}/><br></br>
            <button class="btn btn-primary" onClick={handleFormSubmit}>Add Song</button>
        </form>
    )
}