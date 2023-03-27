function Banner(props) {

 return (
 <div className='banner'> 
  { props.text ? <h1>{props.text}</h1> : null}
 </div>
);
}

export default Banner;