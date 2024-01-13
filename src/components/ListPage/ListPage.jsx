import { useDispatch, useSelector } from 'react-redux';

function listPage() {
    const details = useSelector(store => store.details);

    return (
        <div>
            <main>
            <table id='animeList' key={details.report_item_id} >
                            <thead>
                                <tr>
                                    <th>Anime</th>
                                    <th>Votes</th>
                                    <th>Seen</th>
                                    <th>Raiting</th>
                                    <th>Weighted</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                    <td>{details.report_item_anime}</td>
                                    <td>{details.report_item_nb_votes}</td>
                                    <td>{details.report_item_nb_seen}</td>
                                    <td>{details.report_item_straight_average}</td>
                                    <td>{details.report_item_weighted_average}</td>
                                    </tr>
                                </tbody>
                        </table>
            </main>
        </div>
        
    )
}

export default listPage;