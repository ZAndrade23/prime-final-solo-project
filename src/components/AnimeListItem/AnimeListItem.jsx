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
// export default listItem;