import classes from './CardItemTypePoke.module.scss';

type CardItemTypePokeProps = {
    type: string;
}

function CardItemTypePoke({ type }: CardItemTypePokeProps) {
    return (
        <div className={`${classes[type]} ${classes['type-item']}`}>
            <span className={classes['type-item__title']}>{type}</span>
        </div>
    )
}

export default CardItemTypePoke;