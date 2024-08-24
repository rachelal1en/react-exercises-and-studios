import './styles.css';

function Button() {
   function onLearnMore() {
      alert("Splish Splash I was Taking a Bath")
   };
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;