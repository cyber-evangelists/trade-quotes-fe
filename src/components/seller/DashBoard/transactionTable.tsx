import { Box,  Button, Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { dateFormateHandler } from "../../../../utils/dateformat";

const tableData = [{
    id: 'JOB #215',
    description: 'Inbound Call',
    date: Date.now(),
    cost: '-5 Leads'
},
{
    id: 'JOB #215',
    description: 'Lead Purchase',
    date: Date.now(),
    cost: '-5 Leads'
},
{
    id: 'JOB #215',
    description: 'Leads Top up',
    date: Date.now(),
    cost: '+25 Leads'
},
{
    id: 'JOB #215',
    description: 'Lead Purchase',
    date: Date.now(),
    cost: '-5 Leads'
}]


const TransactionTable = () => {

    return(<Box
    overflow={'hidden'}
        my="10px"
        w="100%"
        p="20px"
        minH={"100px"}
        border={"1px solid #E7E9ED"}
        rounded={"12px"}
      >
        <Text mb={"10px"} fontSize={"22px"} fontWeight={"semibold"}>
        Transaction History
        </Text>
        <Text mb={"10px"} fontWeight={"semibold"}>
        Track what you spent here
        </Text >
        <Box overflow={'hidden'} overflowX='auto'>
        <Table  w='100%' fontWeight={'semibold'}>
            <Thead bg='#E7E9ED' color={'#102547'} >
                <Tr>
                    {Object.keys(tableData[0]).map((head,idx) => {
                            return( <Th color={'#102547'} textTransform={ idx !== 0 ? 'capitalize' : 'uppercase'} key={idx}>{head}</Th>)
                    })}
                   
                </Tr>
            </Thead>
            <Tbody>
                {tableData.map((row,idx) => {
                    return(<Tr key={idx}>
                        <Td whiteSpace={'nowrap'} fontSize={{base: '12px', md: '16px'}} >{row.id}</Td>
                        <Td whiteSpace={'nowrap'} fontSize={{base: '12px', md: '16px'}} >{row.description}</Td>
                        <Td whiteSpace={'nowrap'} fontSize={{base: '12px', md: '16px'}} >{`${dateFormateHandler(row.date).dateNumber}, ${dateFormateHandler(row.date).monthNumber} ${dateFormateHandler(row.date).fullYear}`}</Td>
                        <Td whiteSpace={'nowrap'} fontSize={{base: '12px', md: '16px'}} color={row?.cost.includes('+') ? '#268BFF' : ''} >{row.cost}</Td>
                    </Tr>)
                })}
            </Tbody>
        </Table>
        </Box>
        </Box>)

}

export default TransactionTable;