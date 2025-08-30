import type { PropsWithChildren } from "react";


function Title( {children}: PropsWithChildren ) {      //props: Props   {props.title}

  return (   // this is shows with twe ways 1. normal 2. passing values (children)
    <h1>
      <div >
        fuck u 
      </div>   
      {children}
    </h1>
  );
}
export default Title;   