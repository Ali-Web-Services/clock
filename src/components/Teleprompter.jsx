const Teleprompter = () => {

    const quote = `“Make something undeniable and make it equally as infectious. 
    Why are you doing music? Is it because you just want to look cool? 
    Because that will burn out. When it becomes purpose-oriented, 
    it can be as cool as The Flash, but it will be much more meaningful.”  
    — Pharrell Williams`

    return (
        <div id="teleprompter" className="body">
            <div id="teleprompter-text" className="text">
                {quote}
            </div>
        </div>
    )
}

export default Teleprompter