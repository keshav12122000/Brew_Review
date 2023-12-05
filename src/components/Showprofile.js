import React,{useState} from 'react'
import DisplayProfile from './DisplayProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
function Showprofile() {
    const [city,setcityname] = useState("");
    const [name1,setname1] = useState("");
    const [type,settype] = useState("");
    const [data,setData] = useState({});

    const onChangeHandler =(e)=>{
        console.log(e.target.value)
        setcityname(e.target.value)
    }
    const onChangeHandler1 =(e)=>{
        console.log(e.target.value)
        setname1(e.target.value)
    }
    const onChangeHandler2 =(e)=>{
        console.log(e.target.value)
        settype(e.target.value)
    }
    
    const onSubmitHandler =(e)=>{
        e.preventDefault();
        fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=3`)
        .then((response)=>{
          return response.json();
        }).then((originalData)=>{
          if(originalData){
            console.log(originalData);
            setData(originalData);
          }
        })
    }
    const onSubmitHandler1 =(e)=>{
        e.preventDefault();
        fetch(`https://api.openbrewerydb.org/v1/breweries?by_name=${name1}&per_page=3`)
        .then((response)=>{
          return response.json();
        }).then((originalData)=>{
          if(originalData){
            console.log(originalData);
            setData(originalData);
          }
        })
    }
    const onSubmitHandler2 =(e)=>{
        e.preventDefault();
        fetch(`https://api.openbrewerydb.org/v1/breweries?by_type=${type}&per_page=3`)
        .then((response)=>{
          return response.json();
        }).then((originalData)=>{
          if(originalData){
            console.log(originalData);
            setData(originalData);
          }
        })
    }

    return (
        <>
        <div className="container my-5" >
            <div className="row mt-auto">
                <div className="col-lg-8 col-sm-12 text-center mx-auto">
                    <h1 className="display-4 mb-3">Search for a Brewary </h1>
                </div>
            </div>
            <div className="row">
                
                <div className="col-md-4 mx-auto text-center">
                    <div className="row mb-5 justify-content-center">
                        <form id="myform" autoComplete='off' onSubmit={onSubmitHandler}>
                         <div className="col-lg-8 col-sm-12 my-2 form-group">
                            <input className="form-control form-control-lg" placeholder="City Name" value={city} id="w"  onChange={onChangeHandler} />
                        </div>
                        <div className="col-lg-3 col-sm-12 my-2 form-group">
                            <button className="btn btn-info btn-block w-100 btn-lg">Search</button>
                        </div>
                        </form>  
                    </div>

                </div>
                <div className="col-md-4 mx-auto text-center">
                    <div className="row mb-5 justify-content-center">
                        <form id="myform" autoComplete='off' onSubmit={onSubmitHandler1}>
                         <div className="col-lg-8 col-sm-12 my-2 form-group">
                            <input className="form-control form-control-lg" placeholder="Name of Brewary" value={name1} id="w"  onChange={onChangeHandler1} />
                        </div>
                        <div className="col-lg-3 col-sm-12 my-2 form-group">
                            <button className="btn btn-info btn-block w-100 btn-lg">Search</button>
                        </div>
                        </form>  
                    </div>

                </div>
                <div className="col-md-4 mx-auto text-center">
                    <div className="row mb-5 justify-content-center">
                        <form id="myform" autoComplete='off' onSubmit={onSubmitHandler2}>
                         <div className="col-lg-8 col-sm-12 my-2 form-group">
                            <input className="form-control form-control-lg" placeholder="Type of Brewary " value={type} id="w"  onChange={onChangeHandler2} />
                        </div>
                        <div className="col-lg-3 col-sm-12 my-2 form-group">
                            <button className="btn btn-info btn-block w-100 btn-lg">Search</button>
                        </div>
                        </form>  
                    </div>

                </div>
            </div>
        </div>
        {/* <DisplayProfile data={data}/>  */}
        {/* {data.length > 0 ? <DisplayProfile data={data} />: null} */}
        { data.length > 0 && data.map ((element,index)=>{
               return <DisplayProfile value={element} key={index}/>
            //    return <Home value={element} key={index}/>
                
        })}

        </>

    )
}

export default Showprofile;
