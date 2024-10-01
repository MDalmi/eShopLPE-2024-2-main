import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getProdutoPorCodigoDB, addProdutoDB, updateProdutoDB }
    from "@/componentes/bd/usecases/produtoUseCases";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Suspense } from 'react';
import Loading from '@/componentes/comuns/Loading';

const FormularioPage = async ({ params }) => {
    let produto = null;
    if (params.codigo == 0) {
        produto = { codigo: 0, nome: "" }
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
            nome: formData.get('nome')
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
                <form action={salvarProduto}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6">
                                <div>
                                    <FloatingLabel controlId="campoCodigo"
                                        label="Código" className="mb-3">
                                        <Form.Control type="number"
                                            defaultValue={produto.codigo} readOnly
                                            name="codigo" />
                                    </FloatingLabel>
                                </div>
                                <div>
                                    <FloatingLabel controlId="campoNome"
                                        label="Nome" className="mb-3">
                                        <Form.Control type="text"
                                            defaultValue={produto.nome} required
                                            name="nome" />
                                    </FloatingLabel>
                                </div>
                                <div>
                                    <FloatingLabel controlId="campoNome"
                                        label="Nome" className="mb-3">
                                        <Form.Control type="text"
                                            defaultValue={produto.nome} required
                                            name="nome" />
                                    </FloatingLabel>
                                </div>
                                <div className="form-group text-center mt-3">
                                    <button type="submit" className="btn btn-success">
                                        Salvar <i className="bi bi-save"></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </form>
            </Suspense>
        </>
    )


}

export default FormularioPage;