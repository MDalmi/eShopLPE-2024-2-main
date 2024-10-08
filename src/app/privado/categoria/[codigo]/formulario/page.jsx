import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getCategoriaPorCodigoDB, addCategoriaDB, updateCategoriaDB }
    from "@/componentes/bd/usecases/categoriaUseCases";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Suspense } from 'react';
import Loading from '@/componentes/comuns/Loading';
import FormularioCat from "@/componentes/reaproveitaveis/FormularioCat";

const FormularioPage = async ({ params }) => {
    let categoria = null;
    if (params.codigo == 0) {
        categoria = { codigo: 0, nome: "" }
    } else {
        try {
            categoria = await getCategoriaPorCodigoDB(params.codigo);
        } catch (err) {
            return notFound();
        }
    }

    const salvarCategoria = async (formData) => {
        'use server';
        const objeto = {
            codigo: formData.get('codigo'),
            nome: formData.get('nome')
        }
        try {
            if (objeto.codigo == 0) {
                await addCategoriaDB(objeto);
            } else {
                await updateCategoriaDB(objeto);
            }
        } catch (err) {
            throw new Error('Erro: ' + err);
        }
        revalidatePath('/privado/categoria/');
        redirect('/privado/categoria');
    }

    return (
        <>
            <Suspense fallback={<Loading />}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Categoria</h2>
                </div>
                <FormularioCat salvarCategoria={salvarCategoria} categoria={categoria}/>
            </Suspense>
        </>
    )


}

export default FormularioPage;