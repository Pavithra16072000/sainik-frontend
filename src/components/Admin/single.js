import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Single = (props) => {
    const [Item, setItem] = useState('');
    const [Value, setValue] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Single = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/Single', {
                Item: Item,
                Value:Value
            });
            // setItem(() => "");
            setValue(() => "");

       //     navigate("/login");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="formContent">

        <form onSubmit={Single}>
        <p className="has-text-centered">{msg}</p>
        <h1 className='insert-pad'><strong>Single Values</strong></h1>

        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Item"value={props.text} onClick={(e) => setItem(props.text)} />
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Value"value={Value} onChange={(e) => setValue(e.target.value)} />


          <input type="submit" class="fadeIn fourth submitInput" onClick={(e) => setItem(props.text)} value="Enter" />
        </form>

      {/*  <div id="formFooter">
          <a class="underlineHover la" href="/login">Already Registered?</a>
        </div>*/}

      </div>
      </div>
</div>
    )
}

export default Single
