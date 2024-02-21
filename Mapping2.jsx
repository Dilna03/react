import { TableContainer, TableHead ,Table,TableRow,TableBody,TableCell} from '@mui/material'
import React ,{useState}from 'react'

const Mapping2 = () => {
    var[name,SetName]= useState([
        {"sname":"Tiya","age":10},
        {"sname":"Sruthi","age":15},
        {"sname":"Maya","age":25}
        
    ]
    )
  return (
    <div><TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"20px"}}>
                    Name
                    </TableCell>
                    <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"20px"}}>
                    Age
                    </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {name.map((value,index)=>{
                return(<TableRow>
                    <TableCell>{value.sname}</TableCell>
                    <TableCell>{value.age}</TableCell>
                </TableRow>)
            })}
        </TableBody>
    </Table>
</TableContainer></div>
  )
}

export default Mapping2