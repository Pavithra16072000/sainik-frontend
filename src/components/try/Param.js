import React from 'react'
import { useParams } from "react-router-dom";
const Param = () => {
  const{ id }: { id: string} = useParams();
  return <div> check: {id}</div>;

};
export default Param;
