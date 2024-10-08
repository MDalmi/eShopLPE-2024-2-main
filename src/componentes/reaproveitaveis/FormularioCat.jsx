export default function FormularioCat( salvarCategoria , categoria) {

    return (
        <>
            <form action={salvarCategoria}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                            <div>
                                <FloatingLabel controlId="campoCodigo"
                                    label="Código" className="mb-3">
                                    <Form.Control type="number"
                                        defaultValue={categoria.codigo} readOnly
                                        name="codigo" />
                                </FloatingLabel>
                            </div>
                            <div>
                                <FloatingLabel controlId="campoNome"
                                    label="Nome" className="mb-3">
                                    <Form.Control type="text"
                                        defaultValue={categoria.nome} required
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
        </>
    )
}