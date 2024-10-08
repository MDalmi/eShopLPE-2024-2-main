import { getProdutoPorCodigoDB } from "@/componentes/bd/usecases/produtoUseCases";
import { notFound } from "next/navigation";
import Loading from "@/componentes/comuns/Loading";
import { Suspense } from "react";
import Link from "next/link";
import Detalhes from "@/componentes/reaproveitaveis/Detalhes";

const ProdutoDetalhe = async ({ params }) => {
    let produto = null;
    try {
        produto = await getProdutoPorCodigoDB(params.produtoCodigo);
    } catch (err) {
        return notFound();
    }

    return (
        <Suspense fallback={<Loading />}>
            <Detalhes produto={produto}/>
        </Suspense>
    )
}

export default ProdutoDetalhe;