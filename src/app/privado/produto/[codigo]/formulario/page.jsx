import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getCategoriasDB } from "@/componentes/bd/usecases/categoriaUseCases";
import { getProdutoPorCodigoDB, addProdutoDB, updateProdutoDB } from "@/componentes/bd/usecases/produtoUseCases";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Suspense } from 'react';
import Loading from '@/componentes/comuns/Loading';
import FormularioPro from "@/componentes/reaproveitaveis/FormularioPro";

const FormularioPage = async ({ params }) => {

    const categorias = await getCategoriasDB();

    let produto = null;
    if (params.codigo == 0) {
        produto = {
            codigo: 0, nome: "", descricao: "",
            quantidade_estoque: "", valor: "",
            ativo: true,
            data_cadastro: new Date().toISOString().slice(0, 10),
            categoria: ""
        }
    } else {
        try {
            produto = await getProdutoPorCodigoDB(params.codigo);
        } catch (err) {
            return notFound();
        }
    }

    const salvarProduto = async (formData) => {
        'use server';
        const objeto = {
            codigo: formData.get('codigo'),
            nome: formData.get('nome'),
            descricao: formData.get('descricao'),
            quantidade_estoque: formData.get('quantidade_estoque'),
            valor: formData.get('valor'),
            ativo: formData.get('ativo'),
            data_cadastro: formData.get('data_cadastro'),
            categoria: formData.get('categoria')
        }
        try {
            if (objeto.codigo == 0) {
                await addProdutoDB(objeto);
            } else {
                await updateProdutoDB(objeto);
            }
        } catch (err) {
            throw new Error('Erro: ' + err);
        }
        revalidatePath('/privado/produto/');
        redirect('/privado/produto');
    }

    return (
        <>
            <Suspense fallback={<Loading />}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Produto</h2>
                </div>
                <FormularioPro salvarProduto={salvarProduto} produto={produto}/>
            </Suspense>
        </>
    )


}

export default FormularioPage;