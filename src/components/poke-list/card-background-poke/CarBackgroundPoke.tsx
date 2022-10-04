import classes from './CarBackgroundPoke.module.scss';
import clsx from 'clsx';
import { getGradiend } from '../../../util/poke';

type CardBackGroundPokeProps = {
    src: string;
    type: string[];
};

function CardBackGroundPoke({ src, type }: CardBackGroundPokeProps) {
    const gradientValue = type.length === 2 ? { background: getGradiend(type) } : undefined;

    return (
        <div className={clsx(classes['background-card'], {
            [classes[type[0]]]: type.length === 1
        })} style={gradientValue}>
            <img className={classes['background-card__img']} src={src} />
        </div>
    );
}

export default CardBackGroundPoke;