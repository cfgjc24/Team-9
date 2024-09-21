import React from 'react'
import StickyHeadTable from "../../Components/DataTable/DataTable";

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>{StickyHeadTable()}</div>
  )
}

export default Dashboard