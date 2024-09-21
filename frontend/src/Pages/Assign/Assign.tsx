import React from 'react'
import StickyHeadTable from "../../Components/AssignTable/AssignTable";

type Props = {}

const Assign = (props: Props) => {
  return (
    <>
      <h1 className="title"><u>Waitlist of Clients</u></h1>
      <div>{StickyHeadTable()}</div>
    </>
  )
}

export default Assign