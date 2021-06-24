import React, {useState} from 'react';
import data from './Data';
import style from './Style.module.css';


const List = () => {
    const [people, setPeople] = useState(data);
    let date = new Date();
    console.log(date)

    return(
        <React.Fragment>
            <div className={style['container']}>
                <h2>{people.length} Birthday Today</h2>
                {
                    people.map( (person) => {

                        const {id, age, name, image} = person;

                        return(
                            <div key={id} className={style['burg']}>
                                <img src={image} alt='pro-pic' className={style['img']}/>
                                <h4>{name} {age}</h4>                                                       
                            </div>
                        ) 
                    })
                }
                <button onClick={() => {setPeople([])}}>Delete Item</button>
            </div>
        </React.Fragment>
    )
}

export default List;