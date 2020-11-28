import React from "react";


const newPlatform: React.FC = () => {
    const [ name, setName ] = React.useState("")
    const [ slug, setSlug ] = React.useState("")
    const [ logo, setLogo ] = React.useState("")
    return (
        <div>
            <form method="POST" action="/api/platforms">
                <div>
                    <label htmlFor="platform-name">Name : </label>
                    <input 
                    id="platform-name" 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)}
                    />
                    <label htmlFor="platform-slug">Slug : </label>
                    <input 
                    id="platform-slug" 
                    type="text" 
                    name="slug" 
                    value={slug} 
                    onChange={(event) => setSlug(event.target.value)}
                    />
                    <label htmlFor="platform-logo">Logo : </label>
                    <input 
                    id="platform-logo" 
                    type="text" 
                    name="logo" 
                    value={logo} 
                    onChange={(event) => setLogo(event.target.value)}
                    />
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default newPlatform;
