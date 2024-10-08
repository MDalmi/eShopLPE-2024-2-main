export default function FormularioPro({ salvarProduto, produto }) {

    return (
        <>
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
                                <FloatingLabel controlId="campoDescricao"
                                    label="Descrição" className="mb-3">
                                    <Form.Control type="text"
                                        defaultValue={produto.descricao}
                                        required
                                        name="descricao"
                                        as="textarea"
                                        style={{ height: '100px' }} />
                                </FloatingLabel>
                            </div>
                            <div>
                                <FloatingLabel controlId="campoEstoque"
                                    label="Quantidade em estoque" className="mb-3">
                                    <Form.Control type="number"
                                        defaultValue={produto.quantidade_estoque}
                                        required
                                        name="quantidade_estoque" />
                                </FloatingLabel>
                            </div>
                            <div>
                                <FloatingLabel controlId="campoValor"
                                    label="Valor" className="mb-3">
                                    <Form.Control type="number"
                                        defaultValue={produto.valor}
                                        required
                                        name="valor" />
                                </FloatingLabel>
                            </div>
                            <div>
                                <FloatingLabel controlId="campoData"
                                    label="Data Cadastro" className="mb-3">
                                    <Form.Control type="date"
                                        defaultValue={produto.data_cadastro}
                                        required
                                        name="data_cadastro" />
                                </FloatingLabel>
                            </div>
                            <div>
                                <FloatingLabel controlId="selectAtivo"
                                    label="Ativo" className="mb-3">
                                    <Form.Select type="date"
                                        defaultValue={produto.ativo}
                                        required
                                        name="ativo" >
                                        <option value={true}>SIM</option>
                                        <option value={false}>NÃO</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </div>
                            <div>
                                <FloatingLabel controlId="selectCategoria"
                                    label="Categoria" className="mb-3">
                                    <Form.Select type="date"
                                        defaultValue={produto.categoria}
                                        required
                                        name="categoria" >
                                        <option value="" disabled="true">
                                            Selecione a categoria
                                        </option>
                                        {
                                            categorias.map((cat) => (
                                                <option key={cat.codigo}
                                                    value={cat.codigo}>
                                                    {cat.nome}
                                                </option>
                                            ))
                                        }
                                    </Form.Select>
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