import CardItemTypePoke from '../card-item-type-poke/CardItemTypePoke';
import classes from './CarInfoPoke.module.scss';

type CarInfoPoke = {
    name: string;
    type: string[]
}

function CarInfoPoke({ name, type }: CarInfoPoke) {
    return (
        <div className={classes['content-info']}>
            <p className={classes['content-info__title']}>{name}</p>
            <div className={classes['content-info__content-type']}>
                {type.map((typePoke) => <CardItemTypePoke key={typePoke} type={typePoke} />)}
            </div>
        </div>
    );
}

export default CarInfoPoke;