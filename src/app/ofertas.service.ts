import { Oferta } from './shared/oferta.model';


export class OfertasService {

    //Preenche Array de Oferta
    public ofertas: Oferta[] = [

        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                { url: "/assets/ofertas/1/img1.jpg" },
                { url: "/assets/ofertas/1/img2.jpg" },
                { url: "/assets/ofertas/1/img3.jpg" },
                { url: "/assets/ofertas/1/img4.jpg" }
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                { url: "/assets/ofertas/2/img1.jpg" },
                { url: "/assets/ofertas/2/img2.jpg" },
                { url: "/assets/ofertas/2/img3.jpg" },
                { url: "/assets/ofertas/2/img4.jpg" }
            ]

        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                { url: "/assets/ofertas/3/img1.jpg" },
                { url: "/assets/ofertas/3/img2.jpg" },
                { url: "/assets/ofertas/3/img3.jpg" },
                { url: "/assets/ofertas/3/img4.jpg" },
                { url: "/assets/ofertas/3/img5.jpg" },
                { url: "/assets/ofertas/3/img6.jpg" }
            ]
        }


    ]

    //retorna um array de Oferta
    public getOfertas(): Oferta[] {
        return this.ofertas;
    }

    //retorna uma promise(recurso da linguagem typescript)
    public getOfertas2(): Promise<Oferta[]> {
        //espera que a promise seja resolvida ou rejeitada
        return new Promise((resolve, reject) => {
            //algum tipo de processamento, que ao finalizar, chama a funcção resolve ou reject
            let deu_certo = true //'false' para forçar erro para teste
            if(deu_certo) {
                //encapsulando o resolve para executar o timeout(forçar erro)
                setTimeout(() => resolve (this.ofertas), 3000)
            } else {
                reject ({codigo_erro: 404, mensagem_erro: 'Servidor não encontrado =[=[=['})
            }
        })
        //de modo assincrono para aplicação, continua aplicação via .then(de maneira sincrona entre os then's)
        .then((ofertas: Oferta[]) => {
            //fazer tratativa
            console.log('THEN 1')
            return ofertas
        })
        //de modo assincrono para aplicação, continua aplicação via .then(de maneira sincrona entre os then's)
        .then((ofertas: Oferta[]) => {
            //fazer outr tratativa
            console.log('THEN 2')
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {resolve2(ofertas)}, 3000)
            })
        })
        //de modo assincrono para aplicação, continua aplicação via .then(de maneira sincrona entre os then's)
        .then((ofertas: Oferta[]) => {
            //fazer outr tratativa
            console.log('THEN 3 executado após 3 seundos, pq estava aguardando uma promise ser resolvida')
            return ofertas
        })
    }

}