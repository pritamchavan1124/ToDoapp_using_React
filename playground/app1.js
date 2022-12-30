
const items = [
    // { id: 1, title: 'read java book', status: 'complete' },
    // { id: 2, title: 'read react book', status: 'pending' },
    // { id: 1, title: 'read sql book', status: 'open' },
    // { id: 1, title: 'read dotnet book', status: 'start' }
]
const markItemComplete=(itemToRemove)=>{
    for(let i=0;i<items.length;i++){
        const item=items[i]
        if(item.id==itemToRemove.id){
            items.splice(i,1)
            break;
        }
    }
    render()

}
const addItem=(e)=>{
    e.preventDefault()
    const title=e.target.elements.itemtext.value
    items.push({
        id:items.length+1,
        status:'open',
        title,
    })
    e.target.elements.itemtext.value=""
    render()
}

const render=()=>{
const template = (
    <div>
        <div className="title">
            <h2>ToDo App</h2>
            <p>Welcome What do you want to do today</p>
        </div>
        <div className="add-todo">
            <form onSubmit={addItem}>
            <div className="input-group mb-3">
                <textarea name="itemtext" className="form-control" rows="3" placeholder="Enter your ToDo app hear"></textarea>

                <button className="btn btn-success" type="submit" id="button-addon2">ADD</button>
            </div>
            </form>
        </div>
        <div className="item-list">
            {
                items.map(item => {
                    return <div className='item'>
                        <div class="input-group mb-3">
                            <input value={item.title} type="text" className="form-control" readonly></input>
                            <button onClick={()=>{
                                markItemComplete(item)
                            }} className="btn btn-danger" type="button" id="button-addon2">Complete</button>
                        </div>
                    </div>
                })
            }
        </div>
        <div className="footer"><h2>copyrighted to PRITAM CHAVAN</h2></div>
    </div>
)
ReactDOM.render(template, document.getElementById('app'))
        }
        render()


