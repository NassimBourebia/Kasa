function Banner(props) {

 return (
 <div className='banner'> 
  { props.text ? <h1>{props.text}</h1> : null     /* props.text &&  <h1>{props.text}</h1>*/}
 </div>
);
}

export default Banner;