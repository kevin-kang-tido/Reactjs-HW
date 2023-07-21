
function Card(props){
    return(
        <>
        <div class="card">
            <img src={props.imageURl} 
            alt="image" 
            />
            <div class="card-body">
                <h5 class="card-title">{props.bigtitle}</h5>
                <p class="card-text">
                    {props.desc}
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
        </div>
        </>
    )
}
export default Card;

export function Show_api(props){
    return(
        <>
            <div class="card">
                <img src={props.imageURll} 
                alt="image" 
                />
                <div class="card-body">
                    <h5 class="card-title">{props.titiless}</h5>
                    <p class="card-text">
                        {props.descc}
                    </p>
            </div>
            </div>
        
        </>
    )
}