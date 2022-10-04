import { memo } from 'react';
import CardBackGroundPoke from '../card-background-poke/CarBackgroundPoke';
import CarInfoPoke from '../card-info-poke/CarInfoPoke';
import classes from './CardPoke.module.scss';

type CardPokePorps = {
    name: string;
    src: string;
    type: string[];
    onClick?: (name: string) => void
}

function CardPoke({ name, src, type, onClick = () => {null} }: CardPokePorps) {

    return (
        <div className={classes['poke-card']} onClick={() => onClick(name)}>
            <CardBackGroundPoke src={src} type={type} />
            <CarInfoPoke name={name} type={type} />
        </div>
    );
}

export default memo(CardPoke);