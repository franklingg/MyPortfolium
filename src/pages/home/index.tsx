import Router from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  useEffect(()=>{
    if(Router.pathname === '/home'){
      Router.push('/');
    }
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}
