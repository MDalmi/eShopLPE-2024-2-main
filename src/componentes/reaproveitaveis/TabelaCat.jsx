export default function TabelaCat({categoria}) {

    return (
        <>
            <tr key={categoria.codigo}>
                <td align="center">
                    <Link className="btn btn-info" title="Editar"
                        href={`/privado/categoria/${categoria.codigo}/formulario`}>
                        <i className="bi bi-pencil-square"></i>
                    </Link>
                    <form
                        action={deleteCategoria.bind(null, categoria.codigo)}
                        className="d-inline">
                        <Button className="btn btn-danger" title="Excluir"
                            type="submit">
                            <i className="bi bi-trash"></i>
                        </Button>
                    </form>
                </td>
                <td>{categoria.codigo}</td>
                <td>{categoria.nome}</td>
            </tr>
        </>
    )
}