import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { getProdutosDB, deleteProdutoDB } from "@/componentes/bd/usecases/produtoUseCases";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { Suspense } from 'react';
import Loading from '@/componentes/comuns/Loading';
import Tabela from "@/componentes/reaproveitaveis/TabelaPro";
import TabelaPro from "@/componentes/reaproveitaveis/TabelaPro";

const deleteProduto = async (codigo) => {
    'use server'
    try {
        await deleteProdutoDB(codigo);
    } catch (err) {
        console.log('Erro: ' + err);
        throw new Error('Erro: ' + err);
    }
    revalidatePath('/privado/produto/');
    redirect('/privado/produto/');
}

export default async function Produto() {

    revalidatePath('/privado/produto/');

    const produtos = await getProdutosDB();

    return (
        <Suspense fallback={<Loading />}>
            <div style={{ padding: '20px' }}>
                <Link href={`/privado/produto/${0}/formulario`}
                    className="btn btn-primary">
                    <i className="bi bi-file-earmark-plus"></i> Novo
                </Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Ações</th>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Estoque</th>
                            <th>Ativo</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            produtos.map((produto) => (
                                <TabelaPro produto={produto}/>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
        </Suspense>
    )
}