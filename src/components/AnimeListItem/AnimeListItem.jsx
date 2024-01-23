// import axios from 'axios';

// function listItem() {
//     const clickHandler = () => {
//     axios.delete(`api/list/${props.anime.report_item_id}`).then((response) => {
//         props.getCharacterList();
//     }).catch((error) => {
//         console.error(error);
//         alert('something went wrong!');
//     })
//     }
//     return (
//         <div>
//             <main> 
//                 <button onClick={clickHandler}> DELETE ANIME</button>
//             </main>
//         </div>
//     )


// const deleteFromList = (id) => {
//     axios.delete(`api/list/${id}`).then((result)=>{
//         console.log(`Anime id: ${id} deleted from list`);
//         dispatchEvent({type: 'ADD_LIST_ITEM' });
//     }).catch((error) => {
//         console.error("error in DELETE removing from list", error);
//         alert("error in DELETE removing from list");
//     })
// }
//     return (
//         <div>
//             <button onClick={deleteFromList}>DELETE BUTTON</button>
//         </div>
//     )
// }
// export default listItem;<table id='animeList'  > 
            {/* {key={list.report_item_id}}   */}
            <table id='animeList'  > 
            <thead>
            <tr>
                <th>Anime</th>
                <th>Votes</th>
                <th>Seen</th>
                <th>Raiting</th>
                <th>Weighted</th>
                <th>Status</th>
            </tr>
        </thead>
            <tbody>
                {list.map((list) =>{
                    return(
                        <tr>
                <td>{list.report_item_anime}</td>
                <td>{list.report_item_nb_votes}</td>
                <td>{list.report_item_nb_seen}</td>
                <td>{list.report_item_straight_average}</td>
                <td>{list.report_item_weighted_average}</td>
                {/* <td>{list.user_id}</td> */}
                <td>{list.status}</td>
                <td><button onClick={()=>removeAnime(list.id)}>DELETE ANIME</button></td>
                <td><button onClick={()=>toggleStatus(list.id)} >SWITCH STATUS</button></td>
                        </tr>
                    )
                }
                )}
                
            </tbody>
    </table>
<div>
<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
<TableCell>
  <IconButton
    aria-label="expand row"
    size="small"
    onClick={() => setOpen(!open)}
  >
    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
  </IconButton>
</TableCell>
<TableCell component="th" scope="row">
  {list.report_item_anime}
</TableCell>
<TableCell align="right">{list.report_item_nb_seen}</TableCell>
<TableCell align="right">{list.report_item_straight_average}</TableCell>
<TableCell align="right">{list.report_item_nb_votes}</TableCell>
<TableCell align="right">{list.status}</TableCell>
</TableRow>
<TableRow>
<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
  <Collapse in={open} timeout="auto" unmountOnExit>
    <Box sx={{ margin: 1 }}>
      <Typography variant="h6" gutterBottom component="div">
        Details
      </Typography>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <TableCell>Seen</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell align="right">Votes</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((list) => (
            <TableRow key={list..report_item_nb_seen}>
              <TableCell component="th" scope="row">
                {list.report_item_nb_seen}
              </TableCell>
              <TableCell>{list.report_item_straight_average}</TableCell>
              <TableCell align="right">{list.report_item_nb_votes}</TableCell>
              <TableCell align="right">
                {list.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  </Collapse>
</TableCell>
</TableRow>
</div>