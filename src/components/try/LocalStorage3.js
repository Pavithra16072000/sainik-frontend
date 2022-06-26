import React, { useState } from 'react';

const LocalStorage3 = () => {

   // const [name, setName] = useState('');
   // const [pwd, setPwd] = useState('');
   //
   // const handle = () => {
   //    localStorage.setItem('Name', name);
   //    localStorage.setItem('Password', pwd);
   // };
   const remove = () => {
      localStorage.removeItem('Name');
      localStorage.removeItem('Password');
   };
   return (
      <div className="App">

        {/* {localStorage.getItem('Name') && (*/}
            <div>
               Name: <p>{localStorage.getItem('Name')}</p>
            </div>
           {/* )} */}
         {localStorage.getItem('Password') && (
            <div>
               Password: <p>{localStorage.getItem('Password')}</p>
            </div>
         )}
         <div>
            <button onClick={remove}>Remove</button>
         </div>
      </div>
   );
};
export default LocalStorage3;
