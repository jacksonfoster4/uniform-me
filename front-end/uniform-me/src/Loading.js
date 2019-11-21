import React from 'react'

function Loading(){
    return (
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" style={{ width: 5+'rem', height: 5+'rem' }}role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading