import { useState } from "react";

function AudioHandler() {


    return (
        <div class="audioControls">
            <input type="text" placeholder="Enter video link ..."></input>
            <input type="file"></input>
            <audio controls></audio>
            <p>Key:</p>
            <p>Tempo:</p>
        </div>
    )
}

export default AudioHandler