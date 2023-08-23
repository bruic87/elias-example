import './Descricao.css'

function Descricao () {
    
    const lista = [
        {item: "Camiseta Chapoolin", valor: "R$89", cor: "preta"},
        { item: "Camiseta Breaking Ned", valor: "R$89", cor: "preta"},
        {item: "Camiseta Vingadores", valor: "R$89", cor: "preta"},
        {item: "Rise of Bart", valor: "R$89", cor: "preta"}
    ];

    console.log(lista.length);
    
    

    
    return (
        <section className='descricao'>
            <div>
                <h4></h4>
                <span></span>
            </div>
            <h5></h5>
        </section>
    )
}

export default Descricao