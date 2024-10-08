export default function TabelaPro() {

    return (
        <>
            <tr key={produto.codigo}>
                <td align="center">
                    <Link className="btn btn-info" title="Editar"
                        href={`/privado/produto/${produto.codigo}/formulario`}>
                        <i className="bi bi-pencil-square"></i>
                    </Link>
                    <form
                        action={deleteProduto.bind(null, produto.codigo)}
                        className="d-inline">
                        <Button className="btn btn-danger" title="Excluir"
                            type="submit">
                            <i className="bi bi-trash"></i>
                        </Button>
                    </form>
                </td>
                <td>{produto.codigo}</td>
                <td>{produto.nome}</td>
                <td>{produto.quantidade_estoque}</td>
                <td>{produto.ativo ? 'SIM' : 'NÃO'}</td>
                <td>{produto.categoria_nome}</td>
            </tr>
        </>
    )
}