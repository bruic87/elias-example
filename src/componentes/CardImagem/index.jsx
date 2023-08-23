import './CardImagem.css'
import camisa1 from '../../assets/camisa1.webp'
import camisa2 from '../../assets/camisa2.webp'
import camisa3 from '../../assets/camisa3.webp'
import camisa4 from '../../assets/camisa4.webp'
import Descricao from '../Descricao'

function CardImagem () {
    return (
        <div className='card-imagem'>
            <div>
                <img src={camisa1} />
                <Descricao />
            </div>
            <div>
                <img src={camisa2} />
                <Descricao />
            </div>
            <div>
                <img src={camisa3} />
                <Descricao />
            </div>
            <div>
                <img src={camisa4} />
                <Descricao />
            </div>
        </div>
    )
}

export default CardImagem